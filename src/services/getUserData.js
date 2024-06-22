export const getUserData = () => {
  const userData = JSON.parse(localStorage.getItem('userData') || '{}');
  const config = {
    headers: { Authorization: `Bearer ${userData.token}` },
  };
  return { id: userData.id, username:userData.username,is_business:userData.is_business, config };
};
