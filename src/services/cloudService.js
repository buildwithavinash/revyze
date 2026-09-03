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

export const getCloudQuizAttempts = async () => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("quiz_attempts")
    .select("*")
    .eq("user_id", user.id)
    .order("completed_at", {
      ascending: false,
    });

  if (error) {
    throw error;
  }

  return data;
};


export const saveCloudQuizAttempts = async (attempts) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    return [];
  }

  if (attempts.length === 0) {
    return [];
  }

  const payload = attempts.map((attempt) => ({
    id: attempt.id,
    user_id: user.id,
    quiz_id: attempt.quizId,
    answers: attempt.answers,
    results: attempt.results,
    started_at: attempt.startedAt
      ? new Date(attempt.startedAt).toISOString()
      : null,
    completed_at: attempt.completedAt
      ? new Date(attempt.completedAt).toISOString()
      : new Date().toISOString(),
  }));

  const { data, error } = await supabase
    .from("quiz_attempts")
    .upsert(payload, {
      onConflict: "id",
    })
    .select();

  if (error) {
    throw error;
  }

  return data;
};

export const getCloudQuizProgress = async () => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    return [];
  }

  const { data, error } = await supabase
    .from("quiz_progress")
    .select("*")
    .eq("user_id", user.id);

  if (error) {
    throw error;
  }

  return data;
};

export const saveCloudQuizProgress = async (progress) => {
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
    .from("quiz_progress")
    .upsert(
      {
        user_id: user.id,
        quiz_id: progress.quizId,
        answers: progress.answers || {},
        current_question_index: progress.currentQuestionIndex ?? 0,
        started_at: progress.startedAt
          ? new Date(progress.startedAt).toISOString()
          : null,
        updated_at: progress.updatedAt
          ? new Date(progress.updatedAt).toISOString()
          : new Date().toISOString(),
          shuffle_seed: progress.shuffleSeed || null,
      },
      {
        onConflict: "user_id,quiz_id",
      }
    )
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const saveCloudQuizProgresses = async (progresses) => {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  if (!user) {
    return [];
  }

  if (progresses.length === 0) {
    return [];
  }

  const payload = progresses.map((progress) => ({
    user_id: user.id,
    quiz_id: progress.quizId,
    answers: progress.answers || {},
    current_question_index: progress.currentQuestionIndex ?? 0,
    started_at: progress.startedAt
      ? new Date(progress.startedAt).toISOString()
      : null,
    updated_at: progress.updatedAt
      ? new Date(progress.updatedAt).toISOString()
      : new Date().toISOString(),
      shuffle_seed: progress.shuffleSeed || null,
  }));

  const { data, error } = await supabase
    .from("quiz_progress")
    .upsert(payload, {
      onConflict: "user_id,quiz_id",
    })
    .select();

  if (error) {
    throw error;
  }

  return data;
};