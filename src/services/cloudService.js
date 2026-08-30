import { supabase } from "../lib/supabase";

export const saveCloudQuizAttempt = async (attempt) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    return null;
  }

  const { data, error } = await supabase
    .from("quiz_attempts")
    .insert({
      id: attempt.id,
      user_id: user.id,
      quiz_id: attempt.quizId,
      answers: attempt.answers,
      results: attempt.results,
      started_at: attempt.startedAt
        ? new Date(attempt.startedAt).toISOString()
        : null,
      completed_at: new Date(attempt.completedAt).toISOString(),
    })
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};