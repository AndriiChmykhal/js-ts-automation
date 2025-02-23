import axios from 'axios';
import { User } from './interfaces';
import { API_CONFIG } from './config';
import { UserSummary } from './userDataManager';

export async function fetchUsers(): Promise<User[]> {
    try {
        const response = await axios.get<User[]>(`${API_CONFIG.BASE_URL}/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

fetchUsers().then((users) => {
    if (users.length > 0) {
        const summary = new UserSummary(users[0]);
        console.log(summary.display());
    }
});
