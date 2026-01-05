function Navbar() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/login';
    };

    return (
        <nav className="p-4 border-b flex justify-between">
            <span className="font-bold">Cinema App</span>

            <button
                onClick={handleLogout}
                className="text-sm text-red-600"
            >
                Logout
            </button>
        </nav>
    );
}

export default Navbar;
