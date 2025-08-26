// by Oleksandr Braiko

const response = await fetch ('./api/podcasts.json');
const podcasts = await response.json();

function renderPodcastsList(podcasts) {
    const podcastsListHTML = [];
    for (let pod of podcasts) {
        podcastsListHTML.push(`<li class="podcast-about__episodes__item item">
                <div class="item__meta">
                    <div class="item__date">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" x="0px" y="0px"
                             class="item__date-icon">
                            <title style="" fill="currentColor"> Calendar</title>
                            <g data-name="Layer 17" style="" fill="currentColor">
                                <path d="M2,27a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V13H2ZM22.5,15h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm0,4h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm0,4h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm-5-8h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm0,4h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm0,4h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm-5-8h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm0,4h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm0,4h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm-5-8h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm0,4h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2Zm0,4h2a1,1,0,0,1,0,2h-2a1,1,0,0,1,0-2ZM30,9v2H2V9A3,3,0,0,1,5,6H7V3A1,1,0,0,1,9,3V6H23V3a1,1,0,0,1,2,0V6h2A3,3,0,0,1,30,9Z"
                                      style="" fill="currentColor"></path>
                            </g>
                        </svg>
                        <span class="item__date-text">${pod.date}</span>
                    </div>
                    <div class="item__author">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                             x="0px"
                             y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"
                             class="item__author-icon"><path fill="currentColor" d="M62.117,61.697v24.389c0,3.501,2.07,6.58,5.218,8.41V53.283C64.188,55.11,62.117,58.196,62.117,61.697z" style=""></path>
                            <path fill="currentColor"
                                  d="M33.778,53.274v41.229c3.165-1.822,5.243-4.91,5.243-8.417V61.688  C39.021,58.187,36.943,55.099,33.778,53.274z"
                                  style=""></path>
                            <path fill="currentColor"
                                  d="M50.694,3.397C23.595,3.4,1.632,22.182,1.626,45.36v0.371l5.298,34.014c0.446,2.872,3.318,4.957,6.611,4.957  c0.293,0,0.59-0.014,0.889-0.05c0.296-0.034,0.581-0.088,0.858-0.152v1.586c0,5.605,5.313,10.151,11.869,10.151  c1.567,0,3.052-0.278,4.421-0.749v-43.2c-1.369-0.474-2.854-0.746-4.421-0.746c-4.438,0-8.306,2.086-10.341,5.178L14.983,45  c0.116-8.312,4.075-15.77,10.457-21.242c6.483-5.532,15.371-8.938,25.254-8.942c9.889,0.004,18.773,3.41,25.256,8.942  c6.378,5.472,10.344,12.929,10.461,21.239l-1.882,12.046c-1.974-3.267-5.948-5.502-10.547-5.502c-1.569,0-3.063,0.272-4.436,0.749  v43.194c1.372,0.474,2.866,0.752,4.436,0.752c6.556,0,11.869-4.546,11.869-10.151v-1.761c0.36,0.096,0.731,0.175,1.115,0.217  c3.65,0.418,7.012-1.778,7.504-4.902l5.297-33.909V45.36C99.762,22.182,77.795,3.4,50.694,3.397z"
                                  style=""></path></svg>
                        <span class="item__author-text">${pod.author}</span>
                    </div>
                </div>
                <div class="item__title">
                    <span class="item__title-chapter">${pod.titleChapter}:</span> ${pod.titleName}
                </div>
                <div class="item__about">
                    ${pod.about}
                </div>
                <div class="item__button">
                    <a href="${pod.link}">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" data-icon="media-play"
                             data-container-transform="scale(1 1 ) translate(8 8 )" viewBox="0 0 32 32" x="0px" y="0px"
                             class="item__button-icon"><path
                                d="M.25.156c-.141 0-.25.119-.25.344v15c0 .3.206.412.406.313l15.188-7.625c.2-.1.206-.275-.094-.375l-15.094-7.625c-.05-.025-.109-.031-.156-.031z"
                                transform="translate(8 8)" style="" fill="currentColor"></path></svg>
                        Play episode
                    </span>
                    </a>
                </div>
                <div class="item__spacer"></div>
            </li>`);
    }
    const podcastsListContainer = document.querySelector(".podcast-about__episodes__list");
    podcastsListContainer.innerHTML = podcastsListHTML.join("");
}

renderPodcastsList(podcasts);