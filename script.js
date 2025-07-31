document.addEventListener('DOMContentLoaded'),
  () => {
    const formEL = document.querySelector('.feedback-form');

    let formData = {
      name: '',
      message: '',
    };

    formEL.addEventListener('input', (e) => {
      const name = e.currentTarget.elements.name.value;
      const message = e.currentTarget.elements.message.value;
      formData.name = name;
      formData.message = message;
      console.log(formData);
      saveToLS('formData', formData);
    });

    document.addEventListener('DOMContentLoaded', () => {
      const lsData = getFromLS('formData');

      try {
        formData = lsData;
        formEL.elements.name.value = lsData.name;
        formEL.elements.message.value = lsData.message;
      } catch {}
    });

    function saveToLS(key, value) {
      const jsonData = JSON.stringify(value);
      localStorage.setItem(key, jsonData);
    }

    function getFromLS(key, defaultValue) {
      const jsonData = localStorage.getItem(key);
      try {
        const data = JSON.parse(jsonData);
        return data;
      } catch {
        console.log('ERROR PARSING');
        return defaultValue || jsonData;
      }
    }
  };
