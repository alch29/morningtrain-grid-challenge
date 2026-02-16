const cards = document.querySelectorAll('.card');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.modal__close-button');

const modalContent = {
    0:{
        title: "Northern Lights: Abstract Expressions",
        date: "February 20 - April 10, 2026",
        description: `Dive into the mesmerizing world of Nordic abstraction where light, color, and emotion converge. This exhibition features works from emerging Scandinavian artists who draw inspiration from the ethereal beauty of the Aurora Borealis. 
        
        Through bold brushstrokes, layered textures, and luminous color palettes, these pieces explore themes of nature, identity, and the human condition. Visitors will encounter large-scale canvases, experimental mixed media works, and interactive installations that invite contemplation and dialogue. 
        
        The exhibition includes guided tours every Saturday at 15:00 and an artist talk on March 15th. Free admission for students and children under 12.`,
        image: "images/pawel-czerwinski-NTYYL9Eb9y8-unsplash – stor.jpeg"
    },
    1:{
        title: "Sculptural Visions Workshop",
        date: "March 8, 15, 2026 | 14:00 - 17:00",
        description: `Join acclaimed sculptor Maria Andersen for an intensive two-day workshop exploring contemporary sculpting techniques. Participants will work with clay, wire, and found objects to create their own abstract sculptures, learning fundamental principles of form, balance, and spatial relationships. 
        
        Maria will share insights from her 20-year career, including her process for creating large-scale public installations. The workshop is suitable for beginners and intermediate artists alike, with all materials provided. 
        
        Each session includes hands-on practice, group critiques, and one-on-one guidance. Limited to 12 participants to ensure personalized attention. Participants will take home their finished pieces and receive a certificate of completion.`,
        image: "images/aedrian-salazar-wrEHW8QaeYw-unsplash – stor.jpeg",
    },
    2:{
        title: "Minimalism in Motion",
        date: "April 15 - July 20, 2026",
        description: `Experience the intersection of art and technology in this groundbreaking exhibition of digital and kinetic sculptures. Artists from Denmark, Sweden, and Germany present works that challenge traditional notions of static art, incorporating motors, sensors, and responsive lighting to create ever-changing installations. 
        
        Watch as geometric forms shift and rotate in mesmerizing patterns, or interact with pieces that respond to your movement and presence. The exhibition explores themes of time, impermanence, and the relationship between viewer and artwork. 
        
        Special evening viewings with ambient soundscapes are available every Friday from 18:00-21:00. Educational programs for schools available upon request.`,
        image: "images/beatriz-braga-LNMv5jJRvso-unsplash – stor.jpeg",
    },
    3:{
        title: "Urban Perspectives",
        date: "April 20 - June 14, 2026",
        description: `Copenhagen comes alive through the lens of six talented photographers who capture the soul of the city's streets, architecture, and people. From the colorful facades of Nyhavn to the brutalist beauty of Christianshavn, this exhibition reveals hidden corners and unexpected angles that locals and tourists often overlook. 
        
        Each photographer brings their unique vision, exploring themes of urban life, community, and transformation. The collection includes both black-and-white documentary work and vibrant color compositions, shot over the course of two years. 
        
        A printed catalog with essays from each photographer is available for purchase. Photography walks with the artists are scheduled for the first Sunday of each month.`,
        image: "images/dawid-tkocz-G2X2RRTtrCA-unsplash – stor.jpeg",
    },
    4:{
        title: "Ceramic Traditions Reimagined",
        date: "April 28 - July 30, 2026",
        description: `Discover how contemporary Danish ceramicists honor and reinvent the rich heritage of Nordic pottery. This exhibition showcases functional and sculptural works that bridge traditional craftsmanship with modern design sensibilities. 
        
        From delicate porcelain vessels adorned with innovative glazing techniques to bold stoneware pieces that challenge conventional forms, each work tells a story of cultural continuity and creative evolution. The exhibition includes historical pieces from Alek's Gallery permanent collection displayed alongside contemporary works, highlighting the dialogue between past and present. 
        
        Live pottery demonstrations occur every Saturday, and a ceramics market featuring works for sale takes place on the final weekend.`,
        image: "images/suzanne-boureau-vG9Y8YvzdSQ-unsplash – stor.jpeg",
    },
    5:{
        title: "Portrait Masterclass Series",
        date: "August 12, 19, 26, 2026 | 10:00 - 13:00",
        description: `Elevate your portrait photography skills in this comprehensive three-week masterclass led by award-winning photographer Thomas Nielsen. Each session focuses on a crucial aspect of portraiture: natural and studio lighting techniques, composition and framing strategies, and directing subjects to capture authentic emotion and personality. 
        
        Participants will practice with professional models, learn post-processing workflows, and receive detailed feedback on their work. Thomas will share behind-the-scenes insights from his editorial and commercial projects for international magazines. The course includes access to the gallery's photography studio and equipment. Suitable for photographers with basic camera knowledge. Portfolio reviews on final session with all participants.`,
        image: "images/europeana-PZJixVMUCSA-unsplash – stor.jpeg",
    }
};

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        const content = modalContent[index];
        modal.querySelector('.modal__title').textContent = content.title;
        modal.querySelector('.modal__date').textContent = content.date;
        modal.querySelector('.modal__description').textContent = content.description;
        modal.querySelector('.modal__image').src = content.image;
        modal.classList.add('modal--open');

    });
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('modal--open');
});