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
        $.getJSON('/assets/json/question-temp.json', function(data) {
            
            newGame = data;
            
            let listChar = data['difficulty']['1']['characters']['list']
            let listLength = Math.floor(Math.random() * listChar.length);

            let getCharInfo = listChar[listLength]

            let name = getCharInfo['name'];
            let image1 = getCharInfo['faded_link'];
            let image2 = getCharInfo['full_link'];

            MangoTemplateIconTemp = `<div class="col-md-4 col-lg-3 mb-4">
                                        <img src="`+image1+`" class="img-fluid" alt="Responsive image">
                                    </div>`;

    
            const boxProper = document.getElementById('img-tarvet-div');  
            boxProper.innerHTML = MangoTemplateIconTemp;
        })
        
    }

    StartQuestion();
});