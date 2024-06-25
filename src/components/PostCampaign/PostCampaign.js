import React, {useState} from 'react';
import './PostCampaign.css';
import cross from '../../assets/cross.svg';
import loading_icon from '../../assets/loading.svg';
import {getUserData} from "../../services/getUserData";
import axios from "axios";
import cancel from "../../assets/cancel.svg";
import badge from "../../assets/badge.png";
import business from "../../assets/business.png";
import {useNavigate} from "react-router-dom";

const PostCampaign = () => {
	const [isUpLoading, setIsUpLoading] = useState(false);
	const [file_url, setFile_Url] = useState('');
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('');
	const [category, setCategory] = useState('null');
	const [errorMessage, setErrorMessage] = useState('');
	const navigate = useNavigate();

	const is_business = getUserData().is_business;
	const author = getUserData().id;
	const is_approved = 'pending';

	const handleTitleChange = (e) => {
		setErrorMessage('')
		setTitle(e.target.value);
	}

	const handleContentChange = (e) => {
		setErrorMessage('')
		setContent(e.target.value);
	}

	const handleCategoryChange = (e) => {
		setErrorMessage('')
		setCategory(e.target.value);
	}

	const resetFileInput = () => {
		document.getElementById("imageInput").value = "";
	};

	const deleteHandler = () => {
		setErrorMessage('')
		setFile_Url('')
		resetFileInput();
	};

	const handlerUpload = async (e) => {
		setErrorMessage('')
		const file = e.target.files[0];
		if (!file) {
			return;
		}

		if (file.size > 5242880) {
			alert('File size must be less than 5MB');
			return;
		}

		if (file) {
			setIsUpLoading(true);
		}
		const form = new FormData();
		form.append('file', file);

		const uploadData = await axios.post(
			`${process.env.REACT_APP_API_ENDPOINT}/api/v1/upload`,
			form,
			getUserData().config,
		);
		setIsUpLoading(false);
		setFile_Url(uploadData.data.imageUrl);
		resetFileInput();
	};

	const currentUser = {author, title, content, photo:file_url, category, is_approved}

	const onSubmit = async () => {
		try {
			if(title === '') {
				setErrorMessage('Title is required!')
				return
			}
			if(content === '') {
				setErrorMessage('Content is required!')
				return
			}
			if(!file_url) {
				setErrorMessage('Image is required!');
				return
			}
			if(category === 'null') {
				setErrorMessage('Please choose a category!')
				return
			}
			const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/api/v1/campaigns`, currentUser, getUserData().config,);
			if (response.status === 201) {
				navigate(`/profile/${author}`);
			}
		} catch (e) {
			console.error('Error in post campaign:', e)
		}
	}

  return (
		<div className="post-campaign">
			{is_business ? <div className="badge-container">
				<img src={badge} alt="badge" className="badge-container__badge"/>
				<img src={business} alt="business" className="badge-container__business"/>
			</div>:null}
			<h1 className="post-campaign__title">Quick post</h1>
			<input placeholder="Add a title" className="post-campaign__input" onChange={handleTitleChange} value={title}/>
			<textarea placeholder="Got an idea for a Social Campaign? Share it here!" rows="10" className="post-campaign__content" onChange={handleContentChange} value={content}/>
			<input
				id="imageInput"
				type="file"
				accept="image/jpeg,image/jpg,image/png,image/webp"
				hidden
				onChange={handlerUpload}
			/>
			<div className="image-container">
				{file_url && !isUpLoading ? (
					<div className="uploadImgBox">
						<div className="closeIconWrapper">
							<img src={cancel} className="closeIcon" alt="cancel_icon" onClick={deleteHandler} />
						</div>
						<img src={file_url} className="post-campaign__uploadImg " alt="Content img" />
					</div>
				) : null}
				{isUpLoading && (
					<img className="loading_icon" src={loading_icon} alt="loading_icon" />
				)}
				<label htmlFor="imageInput" className="post-campaign__upload">
					<img src={cross} alt="cross" className="post-campaign__upload"/>
				</label>
			</div>
			{errorMessage && <div className="error">{errorMessage}</div>}
			<div className="post-campaign__submit-container">
				<select id="category" name="category" value={category} onChange={handleCategoryChange} className="post-campaign__selectBtn">
					<option value="null">Category</option>
					<option value="Animal">Animal</option>
					<option value="Business">Business</option>
					<option value="Council">Council</option>
					<option value="Legislation">Legislation</option>
					<option value="University">University</option>
					<option value="Environment">Environment</option>
					<option value="Education">Education</option>
				</select>
				<span onClick={onSubmit} className="post-campaign__submitBtn" >Submit</span>
			</div>
		</div>
	);
};

export default PostCampaign;
