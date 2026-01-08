import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

function CreateMovie() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState('');
    const [duration, setDuration] = useState('');
    const navigate = useNavigate();

    const genres = ['ACTION', 'ROMANTIC', 'COMEDY', 'SCIENCE_FICTION', 'FAMILY'];


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.post('/movies', {
                title,
                description,
                genre,
                duration: Number(duration),
            });

            alert('Movie created successfully!');
            navigate('/movies');
        } catch (error) {
            alert('Failed to create movie');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Create Movie</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    className="border p-2 w-full rounded"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <textarea
                    className="border p-2 w-full rounded"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <select
                    className="border p-2 w-full rounded"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                >
                    <option value="">Select genre</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>


                <input
                    className="border p-2 w-full rounded"
                    placeholder="Duration (minutes)"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                />

                <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                    Create Movie
                </button>
            </form>
        </div>
    );
}

export default CreateMovie;
