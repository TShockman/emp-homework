export const NAME = 'auth';

// lifecycle action names for a login request
export const LOGIN_REQUESTED = `${NAME}/LOGIN_REQUESTED`;
export const LOGIN_FULFILLED = `${NAME}/LOGIN_FULFILLED`;
export const LOGIN_REJECTED = `${NAME}/LOGIN_REJECTED`;
// NOTE: currently the rejected action is unused for simplicity sake
// since logging in always succeeds anyways. In a fuller implementation,
// LOGIN_REJECTED would be dispatched if the service request failed, the
// auth reducer would update the auth state to signify this, and the Login
// component would handle displaying relevant error text to the user.