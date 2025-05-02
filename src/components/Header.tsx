import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useAuth } from "../lib/AuthContext";

export const Header = (): JSX.Element => {
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
    <header className="sticky top-0 w-full bg-transparent backdrop-blur-md z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-14 px-4">
        <div className="flex items-center gap-1.5">
          <img className="w-6 h-6" alt="Logo" src="/frame.svg" />
          <h1 className="font-bold text-xl font-['Urbanist',Helvetica] text-neutral-950">
            AI Mock Interview
          </h1>
        </div>
        <Button 
          className="bg-neutral-900 rounded-xl" 
          size="sm"
          onClick={handleAuth}
        >
          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={user.photoURL || ''}
                alt={user.displayName || 'User'}
                className="w-6 h-6 rounded-full"
              />
              <span>Sign Out</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </div>
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </header>
  );
}; 