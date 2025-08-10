/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    function getQuery(type){
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(urlSearchParams.entries());

        if(type === 1) {
            return params.type || "empty"
        }

        return params.type2 || "empty"
        
    } 

    function repeat(parent1, parent2, newnum, length) {

        if(newnum == parent1 || newnum == parent2) {
            if (newnum != 0 && newnum != (length - 1)) {
                 return repeat(parent1, parent2, newnum + 1, length)
            } else {
                if(newnum == 0 )
                    return repeat(parent1, parent2, newnum + 2, length)
                else if (newnum == (length - 1))
                    return repeat(parent1, parent2, newnum - 2, length)
                else {
                    return repeat(parent1, parent2, newnum - 1, length)
                }
            }
        }

        return newnum;
    }

    function hidename(name) {
        
        let nameArray = name.split("");
        let nameArrLength = nameArray.length;
        let randomAgain = Math.floor(Math.random() * nameArrLength)
        let randomAgain2 = randomAgain
        let randomAgain3 = randomAgain

        if(nameArray.length > 4) {
            randomAgain2 = Math.floor(Math.random() * nameArrLength)
        }

        if(nameArray.length > 6) {
            randomAgain3 = Math.floor(Math.random() * nameArrLength)
        }

        for (i = 0; i < nameArrLength; i++) {
            if(i != randomAgain && i != randomAgain2 && i != randomAgain3) {
                nameArray[i] = "_";
            } 
            
        }
        
        return nameArray.join (" ");
    }


    function StartQuestion() {
        $.getJSON('assets/json/question-temp.json', function(data) {

            let prevList = getQuery(1);
            let prevList2 = getQuery(2)
            
            let listChar = data['difficulty']['1']['characters']['list'];
            let listLength = Math.floor(Math.random() * listChar.length);

            if(listLength == prevList && listLength != 0) {
                listLength - 1;
            } else if (listLength == prevList && listLength != 7)
                listLength + 1;
            else
                listLength;

            if(prevList != "empty") {
                if(listLength != prevList2 && listLength != prevList) {
                    listLength;
                } else {
                    listLength = repeat(prevList2, prevList, listLength, listChar.length);
                }
                    
            }

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

            let nameHidden = hidename(name);

            QuestionTemp = `<div class="col-md-4 col-lg-3 mx-auto mb-4">
                                        <div class="portfolio-item mx-auto"  >
                                            <p>`+nameHidden+`</p>
                                            
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
                                                            
                                                             <p>`+name+`</p>
                                                            <img class="img-fluid rounded mb-5 center thumbnails" src="`+image2+`" alt="..." />
                                                            <a style="padding-left:5%" href="`+newUrl+`" class="btn btn-outline-primary">
                                                                next character
                                                            </a>
                                                            <br><br>
                                                            <a href="`+reseturl+`" class="btn btn-success">
                                                                completed!
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

            ShowTemp = `
                        <a href="#" data-bs-toggle="modal" class="btn btn-outline-primary" data-bs-target="#portfolioModal`+name+`">show image</a>
                        <br><br>
                        <a href="`+reseturl+`" class="btn btn-danger"> game reset </a>
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
