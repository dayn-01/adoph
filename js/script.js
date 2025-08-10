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

    function getQuery(){
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        return params.type || "empty"
    }

    function getQuery2(){
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());
        return params.type2 || "empty"
    }


    function StartQuestion() {
        $.getJSON('assets/json/question-temp.json', function(data) {
            

            let prevList = getQuery();
            let prevList2 = getQuery2()
            newGame = data;
            
            let listChar = data['difficulty']['1']['characters']['list'];
            let listLength = Math.floor(Math.random() * listChar.length);

            if(listLength == prevList && listLength != 0) {
                listLength - 1;
            } else if (listLength == prevList && listLength != 7)
                listLength + 1;
            else
                listLength;

            if(listLength == prevList2 && listLength != 0) {
                listLength - 1;
            } else if (listLength == prevList2 && listLength != 7)
                listLength + 1;
            else
                listLength;

            var reseturl =  window.location.origin + window.location.pathname;
            var newUrl = "";

            if(prevList == "empty") {
                newUrl = window.location.origin + window.location.pathname + "?type=" + listLength
            } else if (prevList2 == "empty"){
                newUrl = window.location.origin + window.location.pathname + "?type=" + prevList + "&type2=" + listLength
            } else {
                newUrl = window.location.origin + window.location.pathname
            }

            let getCharInfo = listChar[listLength];
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
                                                            <a href="`+newUrl+`" class="btn btn-primary">
                                                                next
                                                            </a> <br> <br>
                                                            <a href="`+reseturl+`" class="btn btn-warning">
                                                                reset
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

            ShowTemp = `<a href="#" data-bs-toggle="modal" class="btn btn-outline-primary" data-bs-target="#portfolioModal`+name+`">show</a>
                         <a href="`+reseturl+`" class="btn btn-warning">
                                                                reset
                                                            </a>`

    
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
