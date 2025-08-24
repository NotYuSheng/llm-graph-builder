import api from '../API/Index';

export const chatBotAPI = async (
  question: string,
  session_id: string,
  model: string,
  mode: string,
  document_names?: (string | undefined)[],
  custom_endpoint_url?: string,
  custom_model_name?: string,
  custom_api_key?: string
) => {
  try {
    const formData = new FormData();
    formData.append('question', question);
    formData.append('session_id', session_id);
    formData.append('model', model);
    formData.append('mode', mode);
    formData.append('document_names', JSON.stringify(document_names));
    if (custom_endpoint_url) formData.append('custom_endpoint_url', custom_endpoint_url);
    if (custom_model_name) formData.append('custom_model_name', custom_model_name);
    if (custom_api_key) formData.append('custom_api_key', custom_api_key);
    const startTime = Date.now();
    const response = await api.post(`/chat_bot`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    const endTime = Date.now();
    const timeTaken = endTime - startTime;
    return { response: response, timeTaken: timeTaken };
  } catch (error) {
    console.log('Error Posting the Question:', error);
    throw error;
  }
};

export const clearChatAPI = async (session_id: string) => {
  try {
    const formData = new FormData();
    formData.append('session_id', session_id);
    const response = await api.post(`/clear_chat_bot`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.log('Error Posting the Question:', error);
    throw error;
  }
};
