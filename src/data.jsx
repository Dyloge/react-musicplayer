import {v4 as uuidv4} from 'uuid';


function chillHop (){
    return [
        {
            name : 'Melodiya',
            cover: 'https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg',
            artist: 'Psalm Trees, FloFilz',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=16060' ,
            color: ['#F64534','#FDB336'] ,
            id: uuidv4(),
            active: true,
        },
        {
            name :'Soul Samba' ,
            cover:'https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg' ,
            artist: 'Screen Jazzmaster, Zmeyev' ,
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=16063',
            color: ['#F64534','#FDB336'],
            id: uuidv4(),
            active: false,
        },{ 
            name :'Romance' ,
            cover:'https://chillhop.com/wp-content/uploads/2021/03/75adfe0661d06a9ea66d9c2e99b31e92ae450ebe-1024x1024.jpg' ,
            artist:'RenBoz' ,
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=16064',
            color: ['#F64534','#FDB336'],
            id: uuidv4(),
            active: false,
        },{            
            name :'ny90' ,
            cover: 'https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg',
            artist: 'Ezzy',
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9331',
            color: ['#2E2449','#CE5868'],
            id: uuidv4(),
            active: false,
        },{
            name : 'Far From Home',
            cover: 'https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg',
            artist: 'Toonorth',
            audio:'https://mp3.chillhop.com/serve.php/?mp3=8127',
            color: ['#2E2449','#CE5868'],
            id: uuidv4(),
            active: false,      
        },{            
            name : 'What Was Before',
            cover: 'https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg',
            artist:'Philanthrope, Leavv' ,
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=9923',
            color: ['#2E2449','#CE5868'],
            id: uuidv4(),
            active: false,}
    ];
};

export default chillHop;