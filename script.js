//your JS code here. If required.
// JavaScript code
    const animalUrls = [
      'camel.jpg',
      'cheetah.jpg',
      'elephant.jpg',
      'gorilla.jpg',
      'koala.jpg',
      'lion.jpg',
      'polar_bear.jpg',
      'tiger.jpg',
      'wolf.jpg'
    ];

    // Function to create an <img> element and append it to the DOM
    function createAnimalPhoto(url, altText) {
      const animalPhotosContainer = document.getElementById('animal-photos');
      const img = document.createElement('img');
      img.src = `https://www2.d125.org/applied_arts/teched/courses/WEB/portfolios/2014_FallP8/Rami_Portfolio_Period8/unit4_css/project_1folder/cssProject1/${url}`;
      img.alt = altText;
      img.className = 'animal-photo';
      animalPhotosContainer.appendChild(img);
    }

    // Loop through the animalUrls array and create the animal photos
    for (let i = 0; i < animalUrls.length; i++) {
      createAnimalPhoto(animalUrls[i], animalUrls[i]);
    }