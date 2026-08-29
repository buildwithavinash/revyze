import { supabase } from "../lib/supabase";

// Sign up
export const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
};

// sign in
export const signIn = async (email, password) => {
    const {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if(error){
        throw error
    }

    return data
}

// sign out
export const getSession = async () => {
    const {data, error} = await supabase.auth.getSession();

    if(error){
        throw error
    }

    return data.session;
}

// get current user
export const getCurrentUser = async () => {
    const {
        data, error
    } = supabase.auth.getUser();

    if(error){
        throw error
    }

    return data.user
}