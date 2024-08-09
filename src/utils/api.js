// Função para enviar e-mail usando a API
export const sendEmail = async (emailData) => {
    try {
      const response = await fetch('http://localhost:8000/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar e-mail');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Erro:', error);
      throw error;
    }
  };
  