/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    let newGame = "";

    function StartQuestion() {
        $.getJSON('assets/json/question-temp.json', function(data) {
            
            newGame = data;
            
            let listChar = data['difficulty']['1']['characters']['list']
            let listLength = Math.floor(Math.random() * listChar.length);

            let getCharInfo = listChar[listLength]

            let name = getCharInfo['name'];
            let image1 = getCharInfo['faded_link'];
            let image2 = getCharInfo['full_link'];

            QuestionTemp = `<div class="col-md-4 col-lg-3 mx-auto mb-4">
                                        <div class="portfolio-item mx-auto"  >
                                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                                <div class="portfolio-item-caption-content text-center text-white">
                                            </div>
                                            <img class="img-fluid rounded mb-5 center thumbnails" src="`+image1+`" alt="..." /> <br>
                                            
                                        </div>
                                    </div>`

             ModalTemp = `<div class="portfolio-modal modal fade" id="portfolioModal`+name+`" tabindex="-1" aria-labelledby="portfolioModal`+name+`" aria-hidden="true">
                                    <div class="modal-dialog modal-xl">
                                        <div class="modal-content">
                                           
                                            <div class="modal-body text-center pb-5">
                                                <div class="container">
                                                    <div class="row justify-content-center">
                                                        <div class="col-lg-8">
                                                            `+name+`
                                                            <img class="img-fluid rounded mb-5 center thumbnails" src="`+image2+`" alt="..." />
                                                            <button onClick="window.location.reload()" class="btn btn-primary">
                                                                Next
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

            ShowTemp = `<button href="#" data-bs-toggle="modal" class="btn btn-outline-primary" data-bs-target="#portfolioModal`+name+`">SHOW</a>
                                            `

    
            const boxProper = document.getElementById('img-tarvet-div');  
            boxProper.innerHTML = QuestionTemp;

            const boxModal = document.getElementById('modal-box');  
            boxModal.innerHTML = ModalTemp;

            const boxButton = document.getElementById('button-target');  
            boxButton.innerHTML = ShowTemp;
        })
        
    }

    StartQuestion();
});
