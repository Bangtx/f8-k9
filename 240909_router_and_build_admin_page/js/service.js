const getUsers = async ()  => {
    const users = await getMethod('user');
    return users;
}