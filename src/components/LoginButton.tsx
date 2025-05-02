import React from 'react';
import { useAuth } from '../lib/AuthContext';

export const LoginButton: React.FC = () => {
  const { user, signInWithGoogle, logout } = useAuth();

  const handleAuth = async () => {
    try {
      if (user) {
        await logout();
      } else {
        await signInWithGoogle();
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  };

  return (
    <button
      onClick={handleAuth}
      className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {user ? (
        <>
          <img
            src={user.photoURL || ''}
            alt={user.displayName || 'User'}
            className="w-6 h-6 rounded-full"
          />
          <span>Sign Out</span>
        </>
      ) : (
        <>
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
          </svg>
          <span>Sign in with Google</span>
        </>
      )}
    </button>
  );
}; 