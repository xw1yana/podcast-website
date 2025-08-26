const testimonials = [
    {
        name: "Lucas Thompson",
        image: "img/testimonials/lucas.png",
        imageDescription: "Lucas looking into camera",
        description: "\"EchoWave Radio is my daily escape into a realm of musical brilliance.\n" +
            "From the energizing morning mixes that kickstart my day to the soothing vibes of the Evening\n" +
            "Echoes, every moment is a testament.\""
    },
    {
        name: "John Lolack",
        image: "img/testimonials/john.png",
        imageDescription: "John Lolack looking in camera and being cloaked by the gradient colors",
        description: "\"The diverse playlists and expertly curated shows cater to every mood and genre.\n" +
            "Whether I'm working, relaxing, or dancing in my living room, EchoWave always hits the right\n" +
            "notes. It's like having a personal DJ who just gets me.\""
    },
    {
        name: "Emma Birkin",
        image: "img/testimonials/emmab.png",
        imageDescription: "Emma Birkin smiling and looking somewhere up",
        description: "\"EchoWave Radio is my daily escape into a realm of musical brilliance.\n" +
            "From the energizing morning mixes that kickstart my day to the soothing vibes of the Evening\n" +
            "Echoes, every moment is a testament.\""
    },
    {
        name: "Emma Thompson",
        image: "img/testimonials/emmat.png",
        imageDescription: "Emma Thompson listening music and looking left side",
        description: "\"EchoWave is not just a radio station; it's a companion on my journey to better mental health.\n" +
            "The insightful interviews, personal stories, and practical tips provide a comforting space\n" +
            "for self-reflection and growth.\""
    }
];

function showTestimonialsList(testimonials) {
    const testimonialsListHtml = [];
    for (const testimonial of testimonials) {
        testimonialsListHtml.push(
            `<article class="testimonial__info">
            <img class="testimonial__avatar" src="${testimonial.image}" alt="${testimonial.imageDescription}" />
            <div class="testimonial__content">
                <em class="testimonial__text">
                    ${testimonial.description}
                </em>
                <strong class="testimonial__author">${testimonial.name}</strong>
            </div>
        </article>`
        );
    }
    const testimonialsListContainer = document.querySelector(".testimonials__list");
    testimonialsListContainer.innerHTML = testimonialsListHtml.join("");
}
showTestimonialsList(testimonials);
