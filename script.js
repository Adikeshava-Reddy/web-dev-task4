function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    }

    function toggleBrightness() {
        const body = document.body;
        body.classList.toggle('dark-mode');
    }

const trendingMoviesData = [
    {
        title: 'ANIMAL',
        image: 'images/animal.jpg',
        storedInfo: 'Animal is a 2023 Indian Hindi-language action drama film co-written, directed and edited by Sandeep Reddy Vanga and produced by T-Series Films, Bhadrakali Pictures and Cine1 Studios. The film stars Ranbir Kapoor, Anil Kapoor, Bobby Deol and Rashmika Mandanna in the lead roles alongside a long supporting cast including Tripti Dimri, Shakti Kapoor, Suresh Oberoi, Prem Chopra, Charu Shankar, Upendra Limaye, Babloo Prithiveeraj and Siddhant Karnick. In the film, Ranvijay Singh learns about an assassination attempt on his father and sets out on a path of vengeance and destruction. '
    },
    {
        title: 'KGF 2',
        image: 'images/KGF2.jpg',
        storedInfo: 'KGF: Chapter 2 is a 2022 Indian Kannada-language period action film[19] written and directed by Prashanth Neel, and produced by Vijay Kiragandur under the banner Hombale Films. The second installment in a three-part series, it serves as a sequel to the 2018 film KGF: Chapter 1. The film stars an ensemble cast of Yash, Sanjay Dutt, Raveena Tandon, Srinidhi Shetty, Prakash Raj, Achyuth Kumar, Rao Ramesh, Vasishta N. Simha, Ayyappa P. Sharma, Archana Jois, Saran Shakti, Easwari Rao, John Kokken, T.S Nagabharana and Malavika Avinash.'
    },
    {
        title: 'RRR',
        image: 'images/RRR.jpg',
        storedInfo: 'RRR[note 1] (subtitled onscreen as Roudram Ranam Rudhiram) is a 2022 Indian Telugu-language epic period action drama film directed by S. S. Rajamouli, who co-wrote the film with V. Vijayendra Prasad. It was produced by D. V. V. Danayya of DVV Entertainment. The film stars N. T. Rama Rao Jr. and Ram Charan alongside an ensemble cast with Ajay Devgn, Alia Bhatt, Shriya Saran, Samuthirakani, Ray Stevenson, Alison Doody, and Olivia Morris playing supporting roles. It is a historical fiction film of two Indian revolutionaries, Alluri Sitarama Raju (Charan) and Komaram Bheem (Rama Rao), their friendship, and their fight against the British Raj..'
    },
    {
        title: 'BHAHUBALI',
        image: 'images/bhahubali.jpg',
        storedInfo: 'Baahubali: The Beginning is a 2015 Indian Telugu-language epic fantasy action film co-written and directed by S. S. Rajamouli, and produced by Shobu Yarlagadda and Prasad Devineni under Arka Media Works. The film was produced in Tollywood and was filmed in both Telugu and Tamil languages simultaneously. It features Prabhas in a dual role alongside Rana Daggubati, Anushka Shetty, Tamannaah Bhatia, Ramya Krishna, Sathyaraj, and Nassar. The first of Duology, the film follows Sivudu, an adventurous young man who helps his love Avantika rescue Devasena, the former queen of Mahishmati who is now a prisoner under the tyrannical rule of king Bhallaladeva. The story concludes in Baahubali 2: The Conclusion..'
    }
];

const oldSeriesData = [
    { title: 'FARZI', image: 'images/farzi.jpg',storedInfo: 'Farzi (transl. Fake) is an Indian Hindi-language black comedy crime thriller television series created, produced and directed by Raj & DK, who also co-wrote the series with Sita Menon and Suman Kumar. It stars Vijay Sethupathi, Shahid Kapoor, Kay Kay Menon, Raashii Khanna and Bhuvan Arora, and tells the story of a disillusioned artist who decides to make counterfeit money..' },

    { title: 'RANA NAIDU ', image: 'images/rana.jpg',storedInfo: 'Rana Naidu is an Indian Hindi language action crime drama television series on Netflix directed by Karan Anshuman and Suparn Verma.[1] Produced by Sunder Aaron under the banner Locomotive Global Inc.,[2] it is the official adaptation of the 2013 American crime TV series, Ray Donovan.[3][4] It stars Venkatesh Daggubati, Rana Daggubati, Suchitra Pillai, Gaurav Chopra and Surveen Chawla in lead roles.[5][6][7] The series released on 10 March 2023, via Netflix..' },

    { title: 'DAHAAD ', image: 'images/dahaad.jpg',storedInfo: 'Dahaad (transl. Roar) is a Hindi-language police procedural crime thriller television series created by Reema Kagti and Zoya Akhtar, directed by Reema Kagti and Ruchika Oberoi, and starring Sonakshi Sinha, Gulshan Devaiah, Vijay Varma and Sohum Shah. Inspired by Mohan Kumar, also known as Cyanide Mohan, a serial killer who preyed on women looking for marriage.' },

    { title: 'ROCKET BOYS ', image: 'images/rocket.jpg',storedInfo: 'Rocket Boys is an Indian Hindi-language biographical streaming television series on SonyLIV based on the lives of Homi J. Bhabha and Vikram Sarabhai.[1] It is directed by Abhay Pannu[2] and produced by Siddharth Roy Kapur with Monisha Advani, and Madhu Bhojwani under the banners Roy Kapur Films and Emmay Entertainment, respectively.[3] The series stars Jim Sarbh and Ishwak Singh along with Regina Cassandra.' }
];


const trendingSeriesData = [
    { title: 'PUSHPA', image: 'images/puspa.jpg', storedInfo: 'Pushpa: The Rise is a 2021 Indian Telugu-language action drama film[15] written and directed by Sukumar. It stars Allu Arjun as the title character alongside Fahadh Faasil (his Telugu debut), and Rashmika Mandanna while Jagadeesh Prathap Bandari, Sunil, Raj Tirandasu, Rao Ramesh, Dhananjaya, Anasuya Bharadwaj, Ajay and Ajay Ghosh play supporting roles. It is produced by Mythri Movie Makers in association with Muttamsetty Media. The first installment in the Pushpa film series, the film depicts the rise of a coolie Pushpa Raj in the smuggling syndicate of red sandalwood, a rare wood that grows only in the Seshachalam Hills of Tirupati in Andhra Pradesh state..' },
    
{ title: 'KANTARA', image: 'images/kantara.jpg', storedInfo: 'Kantara (transl. Mystical Forest) is a 2022 Indian Kannada-language action thriller film[20][21] written and directed by Rishab Shetty, and produced by Vijay Kiragandur,[22] under Hombale Films. The film stars Rishab Shetty in a dual role with Kambala champion who is at loggerheads with an upright forest officer, Murali (played by Kishore)..' },
   
 { title: 'THE KERALA STORY', image: 'images/kerala.jpg', storedInfo: 'he Kerala Story is a 2023 Indian Hindi-language drama film directed by Sudipto Sen and produced by Vipul Amrutlal Shah.[1] It stars Adah Sharma, Yogita Bihani, Sonia Balani, and Siddhi Idnani. The plot follows a group of women from Kerala who are coerced into converting to Islam and joining the Islamic State .[5][6] Marketed as a true story, the film is premised on the Hindutva conspiracy theory of "love jihad",[7] and falsely claims that thousands of Hindu women from Kerala have been converted to Islam and recruited in the Islamic State..' },
{ title: 'SCARED GAMES', image: 'images/sacred.jpg', storedInfo: 'A link in their pasts leads an honest cop to a fugitive gang boss, whose cryptic warning spurs the officer on a quest to save Mumbai from cataclysm.' }

];


function createContentElement(content) {
    const contentElement = document.createElement('div');
    contentElement.classList.add('content');
    contentElement.innerHTML = `
        <img src="${content.image}" alt="${content.title}">
        <h3>${content.title}</h3>
    `;
    contentElement.addEventListener('click', function() {
        toggleStoredInfo(content.storedInfo);
    });
    return contentElement;
}


function toggleStoredInfo(info) {
    const infoDisplay = document.getElementById('infoDisplay');
    if (infoDisplay.textContent === info) {
      
        infoDisplay.textContent = '';
    } else {
    
        infoDisplay.textContent = info;
    }
}
   
    function  toggleStoredInfo(content) {
        const infoDisplay = document.getElementById('infoDisplay');
        const imageDisplay = document.getElementById('imageDisplay');
  infoDisplay.textContent = content.storedInfo;
  imageDisplay.src = content.image;
        imageDisplay.alt = content.title;

      
      infoDisplay.style.display='block';
      imageDisplay.style.display='block';
infoDisplay.style.margin='auto';
imageDisplay.style.margin='auto';

       
        window.scrollTo(0, document.body.scrollHeight);
    }


    function createContentElement(content) {
        const contentElement = document.createElement('div');
        contentElement.classList.add('content');
        contentElement.innerHTML = `
            <img src="${content.image}" alt="${content.title}">
            <h3>${content.title}</h3>
        `;
        contentElement.addEventListener('click', function() {
            toggleStoredInfo(content);
        });
        return contentElement;
    }


function searchContent() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const movieContainer = document.getElementById('trending-movies').querySelector('.movie-container');
    const seriesContainer = document.getElementById('trending-series').querySelector('.series-container');
    const oldSeriesContainer = document.getElementById('old-series').querySelector('.series-container');


    movieContainer.innerHTML = '';
    seriesContainer.innerHTML = '';
    oldSeriesContainer.innerHTML = '';


    const filteredMovies = trendingMoviesData.filter(movie => movie.title.toLowerCase().includes(searchInput));

    if (filteredMovies.length > 0) {
        filteredMovies.forEach(movie => {
            const movieElement = createContentElement(movie);
            movieContainer.appendChild(movieElement);
        });
    } else {
        movieContainer.innerHTML = '<p style="text-aligmn:center">No data found</p>';
    }

    const filteredTrendingSeries = trendingSeriesData.filter(series => series.title.toLowerCase().includes(searchInput));

    if (filteredTrendingSeries.length > 0) {
        filteredTrendingSeries.forEach(series => {
            const seriesElement = createContentElement(series);
            seriesContainer.appendChild(seriesElement);
        });
    } else {
        seriesContainer.innerHTML = '<p>No data found</p>';
    }

 
    const filteredOldSeries = oldSeriesData.filter(series => series.title.toLowerCase().includes(searchInput));

    if (filteredOldSeries.length > 0) {
        filteredOldSeries.forEach(series => {
            const seriesElement = createContentElement(series);
            oldSeriesContainer.appendChild(seriesElement);
        });
    } else {
        oldSeriesContainer.innerHTML = '<p>No data found</p>';
    }
}


window.onload = function() {
    searchContent();
};

