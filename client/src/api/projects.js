import axios from 'axios';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export async function fetchProjects() {
    const resp = await axios.get(`${API_BASE}/projects`);
    return resp.data;
}

export async function fetchProjectById(id) {
    const resp = await axios.get(`${API_BASE}/projects/${id}`);
    return resp.data;
}

// need to add functions for other queries if i want to make interface