'use strict';
console.log("COURTSEY: Department of Mathematics");

const course = [
    {
        "Name": "B.Sc. Mathematics",
        "regis":'GST101,GST103,GST107,BIO101,BIO191,CHM101,CHM103,CHM191,CIT104,MTH101,MTH103,PHY101, PHY191,GST102,BIO102,BIO192,CIT102,CHM102,CHM192,MTH102,STT102,PHY102,PHY192,GST201,GST203,CIT215,MTH211,MTH213,MTH241,MTH281,STT211,PHY207,PHY201,GST202,MTH212,MTH232,MTH210,MTH251,MTH282,PHY204,PHY206,GST301,MTH301,MTH303,MTH304,MTH311,MTH341,MTH381,MTH307,STT311,GST301,MTH302,MTH305,MTH308,MTH312,MTH382,MTH309,MTH315,MTH401,MTH411,MTH421,MTH423,MTH417,CIT425,MTH402,MTH412,MTH499',
        "regis1":'GST101,GST103,GST107,GST102,GST201,GST203,CIT215,MTH211,MTH213,MTH241,MTH281,STT211,PHY207,PHY201,GST202,MTH212,MTH232,MTH210,MTH251,MTH282,PHY204,PHY206,MTH301,MTH303,MTH304,MTH311,MTH341,MTH381,MTH307,STT311,GST302,MTH301,MTH305,MTH308,MTH312,MTH382,MTH309,MTH315,MTH401,MTH411,MTH421,MTH423,MTH417,CIT425,MTH402,MTH412,MTH499',
        "elec":'MTH381,MTH307,MTH309,MTH315,MTH417,PHY207,PHY201,PHY204,PHY206,STT311,CIT425,GST103,GST301',
        "chang":[['CIT101','CIT104'],['GST103','GST101'],['GST301','GST302'],['MTH121','MTH101'],['MTH131','MTH101'],['MTH142','MTH103'],['MTH133','MTH103'],['MTH122','MTH102'],['MTH112','MTH102'],['STT102','MTH102']],
    },
    {
        "Name": "B.Sc. Computer Science",
        "regis":'GST101,CIT101,GST103,GST107,BIO101,CHM101,CHM103,CIT143,MTH101,MTH103,PHY101,BIO191,CHM191,PHY191,GST102,STT102,CHM102,CIT102,MTH102,STT102,BIO102,BIO192,CHM192,PHY102,PHY192,GST201,GST203,CIT211,CIT215,CIT237,MTH213,MTH281,GST202,CIT208,CIT212,CIT246,CIT292,MTH282,CIT309,CIT311,CIT333,CIT341,CIT351,CIT353,CIT383,CIT322,GST301,GST302,CIT342,CIT344,CIT381,CIT389,CIT392,CIT403,CIT411,CIT425,CIT427,CIT445,CIT412,CIT432,CIT484,CIT499',
        "regis1":'GST101,GST103,GST107,GST102,GST201,GST203,CIT211,CIT215,CIT237,MTH213,MTH281,GST202,CIT208,CIT212,CIT246,CIT292,MTH282,CIT309,CIT311,CIT333,CIT341,CIT351,CIT353,CIT383,CIT322,GST302,CIT342,CIT344,CIT381,CIT389,CIT392,CIT403,CIT411,CIT425,CIT427,CIT445,CIT412,CIT432,CIT484,CIT499',
        "elec":'MTH307,MTH381,STT11,CIT371,MTH382,CIT461,CIT463,CIT465,CIT467,CIT474,CIT484,CIT213,MTH211,MTH242,MTH212,MTH232,STT211',
        "chang":[['CIT104','CIT102'],['CIT101','GST103'],['GST103','GST101'],['GST301','GST302'],['MTH121','MTH101'],['MTH131','MTH101'],['MTH142','MTH103'],['MTH133','MTH103'],['MTH122','MTH102'],['MTH112','MTH102'],['STT102','MTH102'],['PHY132','PHY102'],['PHY101','PHY111'],['PHY101','PHY113']],

    },
    {
        "Name":  "B.Sc. Mathematics and Computer Science",
        "regis":'GST101,GST103,GST107,BIO101,BIO191,CHM101,CHM103,CHM191,CIT104,MTH101,MTH103,PHY101,PHY191,GST102,BIO102,BIO192,CIT102,CHM102,CHM192,MTH102,STT102,PHY102,PHY192,GST201,GST203,CIT237,MTH281,MTH211,MTH213,MTH241,CIT211,CIT215,MTH210,GST202,MTH212,MTH232,MTH282,CIT208,CIT212,CIT246,CIT292,STT211,CIT333,CIT341,CIT351,MTH301,MTH341,CIT311,CIT309,STT311,GST301,MTH312,CIT342,CIT322,CIT389,CIT344,CIT371,MTH401,MTH411,CIT403,CIT425,CIT465,CIT461,MTH402,MTH412,CIT478,CIT474,CIT432,MTH499',
        "regis1":'GST101,GST103,GST107,GST102,GST201,GST203,CIT237,MTH281,MTH211,MTH213,MTH241,CIT211,CIT215,MTH210,GST202,MTH212,MTH232,MTH282,CIT208,CIT212,CIT246,CIT292,STT211,CIT333,CIT341,CIT351,MTH301,MTH341,CIT311,CIT309,STT311,GST301,MTH312,CIT342,CIT322,CIT389,CIT344,CIT371,MTH401,MTH411,CIT403,CIT425,CIT465,CIT461,MTH402,MTH412,CIT478,CIT474,CIT432,MTH499',
        "elec":'CIT211,CIT215,MTH210,CIT292,STT211,CIT311,CIT309,STT311,CIT371,CIT416,CIT474,CIT432,CIT344,CIT461,GST103,GST301',
        "chang":[['CIT101','CIT104'],['GST103','GST101'],['GST301','GST302'],['MTH121','MTH101'],['MTH131','MTH101'],['MTH142','MTH103'],['MTH133','MTH103'],['MTH122','MTH102'],['MTH112','MTH102'],['STT102','MTH102']],

    },
        {
        "Name":"B.Sc. Information Technology",
        "regis1":"GST101,GST103,GST107,GST201,GST203,CIT211,CIT215,CIT237,MTH211,MTH213,GST202,GST204,CIT208,CIT212,CIT236,CIT292,MTH212,MTH232,CIT303,CIT305,CIT309,CIT311,CIT389,GST302,CIT342,CIT344,CIT392,DAM301,DAM364,CIT403,CIT411,CIT427,CIT461,CIT465,CIT425,CIT474,DAM461,CIT499",
        "regis":"GST101,CIT101,GST103,GST107,BIO101,CHM101,CHM103,CIT143,MTH101,MTH103,MTH133,PHY101,BIO191,CHM191,PHY191,GST102,CHM102,CIT102,MTH102,STT102,BIO102,BIO192,CHM192,PHY102,PHY192,GST201,GST203,CIT211,CIT215,CIT237,MTH211,MTH213,GST202,GST204,CIT208,CIT212,CIT236,CIT292,MTH212,MTH232,CIT303,CIT305,CIT309,CIT311,CIT389,GST302,CIT342,CIT344,CIT392,DAM301,DAM364,CIT403,CIT411,CIT427,CIT461,CIT465,CIT425,CIT474,DAM461,CIT499",
        "elec":"MTH281,MTH282,CIT341,CIT371,MTH232,CIT381,CIT322,DAM344,DAM382,CIT415,CIT445,CIT463,CIT484",
        "chang":[['CIT101','CIT104'],['CIT104','CIT101'],['GST101','GST103'],['GST103','GST101'],['GST301','GST302'],['MTH121','MTH101'],['MTH131','MTH101'],['MTH142','MTH103'],['MTH133','MTH103'],['MTH122','MTH102'],['MTH112','MTH102'],['STT102','MTH102']],
     },
     {
         "Name":"B.Sc. Biology",
        "regis1":"GST101,GST103,GST107,BIO201,BIO203,BIO205,BIO207,BIO209,BIO211,BIO213,BIO215,GST201,GST203,ESM112,BIO204,BIO206,BIO208,BIO210,BIO212,BIO216,BIO218,GST202,GST301,BIO301,BIO303,BIO305,BIO307,BIO309,BIO311,GST302,BIO302,BIO306,BIO308,BIO310,BIO312,BIO314,BIO316,BIO400,BIO401,BIO403,BIO405,BIO407,BIO409,BIO411,BIO402,BIO404,BIO408,BIO410,BIO217,BIO214,BIO220,BIO313,BIO304,BIO318,BIO320,BIO406,BIO413,BIO415,BIO414,BIO416",
        "regis":"BIO101,BIO191,CHM101,CHM103,CHM191,CIT104,GST101,GST103,GST107,MTH101,PHY101,PHY191,BIO192,BIO102,GST102,CHM102,CHM192,PHY102,PHY192,ESM102,MTH102,CIT102,BIO201,BIO203,BIO205,BIO207,BIO209,BIO211,BIO213,BIO215,GST201,GST203,ESM112,BIO204,BIO206,BIO208,BIO210,BIO212,BIO216,BIO218,GST202,GST301,BIO301,BIO303,BIO305,BIO307,BIO309,BIO311,GST302,BIO302,BIO306,BIO308,BIO310,BIO312,BIO314,BIO316,BIO400,BIO401,BIO403,BIO405,BIO407,BIO409,BIO411,BIO402,BIO404,BIO408,BIO410,BIO217,BIO214,BIO220,BIO313,BIO304,BIO318,BIO320,BIO406,BIO413,BIO415,BIO414,BIO416",
        "elec":"BIO217,BIO214,BIO220,BIO313,BIO304,BIO318,BIO320,BIO406,BIO413,BIO415,BIO414,BIO416",
        "chang":[['GST103','GST101'],['GST302','GST301'],['CIT101','CIT104'],['GST301','GST302']],
 },
 {    
        "Name":"B.Sc. Physics",
        "regis1":'GST101,GST103,GST107,GST201,GST203,CIT215,MTH281,PHY201,PHY203,PHY207,PHY261,PHY291,STT211,MTH212,MTH232,PHY202,PHY204,PHY206,PHY208,GST302,MTH303,PHY301,PHY303,PHY307,PHY309,PHY311,PHY313,PHY391,PHY306,PHY308,PHY310,PHY312,PHY314,PHY399,PHY401,PHY 405,PHY407, PHY402,PHY404,PHY406,PHY361,PHY455,PHY457,PHY461,PHY456,,PHY499',
        "regis":"GST101,GST107,BIO101,BIO191,CHM101,CHM103,CHM191,CIT104,MTH101,PHY101,PHY103,PHY191,GST102,BIO102,BIO192,CHM102,CHM192,CIT102,MTH102,PHY102,PHY192,GST201,GST203,CIT215,MTH281,PHY201,PHY203,PHY207,PHY261,PHY291,STT211,MTH212,MTH232,PHY202,PHY204,PHY206,PHY208,GST302,MTH303,PHY301,PHY303,PHY307,PHY309,PHY311,PHY313,PHY391,PHY306,PHY308,PHY310,PHY312,PHY314,PHY399,PHY401,PHY 405,PHY407, PHY402,PHY404,PHY406,PHY361,PHY455,PHY457,PHY461,PHY456,PHY499",
        "elec":"PHY361,PHY455,PHY457,PHY461,PHY456",
        "chang":[['GST103','GST101'],['GST301','GST302'],['GST302','GST301'],['CIT101','CIT104'],['PHY403','PHY404'],['PHY410','PHY406'],['PHY409','PHY401'],['PHY320','PHY391'],['PHY209','PHY206'],['PHY220','PHY291'],['PHY132','PHY102'],['PHY121','PHY103'],['PHY113','PHY101'],['PHY113','PHY101']],
  },
  {
    "Name":"B.Sc. Chemistry",
    "regis1":"GST101,GST103,GST107,GST201,GST203,CHM201,CHM203,CHM205,CHM291,MTH281,GST202,CHM202,CHM204,CHM292,MTH212,PHY202,PHY204,GST302,GST301,CHM301,CHM303,CHM305,CHM307,CHM309,CHM391,CHM302,CHM306,CHM312,CHM314,CHM318,CHM394,CHM401,CHM407,CHM409,CHM413,CHM421,CHM423,CHM400,CHM406,CHM408,CHM414,CHM416,CHM424,BIO213,ESM231,BIO216,ESM216,ESM222,CHM311,CHM315,CHM304,CHM316,CHM405,CHM417,CHM415,CHM422,CHM426,CHM402,CHM411",
    "regis":"GST101,GST107,CIT101,BIO101,BIO191,CHM101,CHM103,CHM191,CIT143,MTH101,MTH103,PHY101,PHY191,GST102,BIO102,BIO192,CHM102,CHM192,CIT102,CIT104,MTH102,PHY102,PHY192,STT102,GST201,GST203,CHM201,CHM203,CHM205,CHM291,MTH281,GST202,CHM202,CHM204,CHM292,MTH212,PHY202,PHY204,GST302,GST301,CHM301,CHM303,CHM305,CHM307,CHM309,CHM391,CHM302,CHM306,CHM312,CHM314,CHM318,CHM394,CHM401,CHM407,CHM409,CHM413,CHM421,CHM423,CHM400,CHM406,CHM408,CHM414,CHM416,CHM424,BIO213,ESM231,BIO216,ESM216,ESM222,CHM311,CHM315,CHM304,CHM316,CHM405,CHM417,CHM415,CHM422,CHM426,CHM402,CHM411",
    "elec":"BIO213,ESM231,BIO216,ESM216,ESM222,CHM311,CHM315,CHM304,CHM316,CHM405,CHM417,CHM415,CHM422,CHM426,CHM402",
    "chang":[['GST301','GST302'],['GST302','GST301'],['GST103','GST101'],['GST101','GST103'],['CIT104','CIT101'],['CIT101','CIT104'],['CHM394','CHM401']],
 },
 {
    "Name":"PGD Information Technology",
    "regis1":"GST707,CIT701,CIT703,CIT753,CIT735,CIT722,CIT736,CIT756,CIT752,CIT799",
    "regis":"GST707,CIT701,CIT703,CIT753,CIT735,CIT722,CIT736,CIT756,CIT752,CIT799",
    "elec":"CIT711,CIT759,CIT721,CIT734,CIT742",
    "chang":[['GST103','GST101'],['GST302','GST301']],
},
{
    "Name":"M.Sc. Information Technology",
    "regis1":"GST807,CIT843,CIT831,CIT853,CIT851,CIT802,CIT854,CIT852,CIT834,CIT899",
    "regis":"GST807,CIT843,CIT831,CIT853,CIT851,CIT802,CIT854,CIT852,CIT834,CIT899",
    "elec":"CIT841,CIT811,CIT891,CIT832,CIT844",
    "chang":[['GST103','GST101'],['GST302','GST301']],
},
{
    "Name":"B.Sc. Accounting",
    "regis1":"ECO121,GST101,GST105,GST107,MTH105,BUS105,BFN104,ECO122,GST102,MKT108,MTH106,ACC201,GST201,STT205,ACC203,BUS205,BUS207,BFN209,ECO231,ACC210,GST202,STT206,ACC204,ACC206,ENT202,ACC306,ACC311,ACC313,PAD305,ACC318,FMS304,ACC411,BUS401,BFN411,BUS427,ACC450,ACC418,ACC426,BUS406,BUS428,BUS106,ACC101,ACC102,CIT202,ENT304,BFN310,BFN303,CLL307,GST103,GST104,BUS317,GST302,ACC419,SMS201,SMS202,ACC307,ACC415,SMS204,SMS206,ACC450",
    "regis":"ECO121,GST101,GST105,GST107,MTH105,BUS105,BFN104,ECO122,GST102,MKT108,MTH106,ACC201,GST201,STT205,ACC203,BUS205,BUS207,BFN209,ECO231,ACC210,GST202,STT206,ACC204,ACC206,ENT202,ACC306,ACC311,ACC313,PAD305,ACC318,FMS304,ACC411,BUS401,BFN411,BUS427,ACC450,ACC418,ACC426,BUS406,BUS428,BUS106,ACC101,ACC102,CIT202,ENT304,BFN310,BFN303,CLL307,GST103,GST104,BUS317,GST302,ACC419,SMS201,SMS202,ACC307,ACC415,SMS204,SMS206,ACC450",
    "elec":'BFN405,ACC407,BFN409,MKT306,BFN304',
    "chang":[['GST103','GST101'],['GST301','GST302'],['GST301','GST302'],['MTH121','MTH101'],['MTH131','MTH101'],['MTH142','MTH103'],['MTH133','MTH103'],['MTH122','MTH102'],['MTH112','MTH102'],['STT102','MTH102']],
},
{
    "Name":"B.Sc. Banking and Finance",
    "regis1":"ECO121,GST101,GST105,GST107,MTH105,BUS105,BFN104,ECO122,GST102,MKT108,BUS106,MTH106,GST201,STT205,ACC203,BUS205,BUS207,BFN209,ECO231,GST202,STT206,ACC204,ACC206,CLL307,BFN301,BFN303,CLL305,BFN302,BFN304,BFN306,BFN308,FMS304,PAD305,CIT202,ENT204,BFN401,BFN403,BFN405,BFN407,BFN409,BUS427,BFN402,BFN450,BUS406,BUS428,GST103,GST104,GST302,SMS201,SMS202,ENT403,ETN304,BFN310,BFN421,ACC307,BUS450",
    "regis":"ECO121,GST101,GST105,GST107,MTH105,BUS105,BFN104,ECO122,GST102,MKT108,BUS106,MTH106,GST201,STT205,ACC203,BUS205,BUS207,BFN209,ECO231,GST202,STT206,ACC204,ACC206,CLL307,BFN301,BFN303,CLL305,BFN302,BFN304,BFN306,BFN308,FMS304,PAD305,CIT202,ENT204,BFN401,BFN403,BFN405,BFN407,BFN409,BUS427,BFN402,BFN450,BUS406,BUS428,GST103,GST104,GST302,SMS201,SMS202,ENT403,ETN304,BFN310,BFN421,ACC307.BUS450",
    "elec":"ENT403,ETN304,BFN310,BFN421",
    "chang":[['GST103','GST101'],['GST302','GST301'],['CIT101','CIT104'],['GST301','GST302']],
},
{
    "Name":"B.Sc. ESM",
    "regis1":"GST101,GST103,GST107,GST201,GST203,ESM234,ESM273,ESM211,ESM231,ESM291,ESM261,GST202,ESM204,ESM222,ESM236,ESM238,ECO292,ESM299,ESM206,ESM212,GST302,ESM301,ESM305,ESM311,ESM317,ESM341,SM343,ESM345,PUL303,ESM306,AEM303,CHM314,ESM304,ESM322,ESM328,ESM342,ESM392,ESM326,ESM399,ESM308,ESM324,ESM405,ESM407,ESM423,ESM431,ESM411,ESM421,ESM403,ESM426,ESM428,ESM444,ESM424,ESM422,ESM401",
    "regis":"GST101,GST107,BIO101,BIO191,CHM191,CHM101,CIT101,MTH101,GST102,CHM102,CHM192,CIT102,BIO102,ESM102,ESM104,ESM106,ESM112,MTH102,PHY101,GST201,GST203,ESM234,ESM273,ESM211,ESM231,ESM291,ESM261,GST202,ESM204,ESM222,ESM236,ESM238,ECO292,ESM299,ESM206,ESM212,GST302,ESM301,ESM305,ESM311,ESM317,ESM341,SM343,ESM345,PUL303,ESM306,AEM303,CHM314,ESM304,ESM322,ESM328,ESM342,ESM392,ESM326,ESM399,ESM308,ESM324,ESM405,ESM407,ESM423,ESM431,ESM411,ESM421,ESM403,ESM426,ESM428,ESM444,ESM424,ESM422,ESM401",
    "elec":"ESM422,ESM206,ESM212,ESM306,AEM303,ESM308,ESM324,ESM411,ESM421,ESM424",
    "chang":[['GST103','GST101'],['GST302','GST301'],['CIT101','CIT104'],['CHM394','CHM401'],['GST301','GST302']],
    
},

     
]

let passed=[];
let regis=["1"];
let regis1=[1];
let elec=[];
let chang=[];
let t11=""


const withP=[]
const withOP=[]


function cha1(){
    for(const i of chang){
        pass
    }
}

function pass(i){
    const p=i.split('-')
    
    const li=[];
    for(const j of p){
        const t=j.split(',');
        
        if(t.length!=1){
            li.push(t[1]);
        }else{
            li.push(t[0]);
        }
       
    }
    let re=li.pop();
    // console.log(li);
    // console.log(li.length);
    return (li)
    
}

function reg(i){
    console.log(i)
    const p=i.split(',')
    // console.log(p);
    // console.log(p.length);
    const li=[];
    return(p)
 
    
}

function outS(j,i){
    const li=[]
    for(const k of i){
        if(j.includes(k)){
            // console.log(k);
        }else{
            // console.log(k);
            li.push(k);
        }
    }
    return(li)
}

// console.log(reg(regis)[reg(regis).length-1])
// console.log(pass(passed));
// console.log(reg(regis));

// console.log(outS(pass(passed),reg(regis)));

// const stand=outS(pass(passed),reg(regis));

// console.log(outS(reg(elec),stand));

let files=[]

function upload(){
    let file={}
    const upc=document.getElementById('upC').
    addEventListener('click', () => {
        Papa.parse(document.getElementById('uploadfile').files[0],
        {
            download:true,
            header: true,
            skipEmtyLines:true,
            complete: function(results){
                // console.log(results);
               
                // console.log(file);
                if(document.querySelector('input[name="dept"]:checked').value==="NONE"){
                // var t11=document.querySelector('input[name="dept"]:checked').value;
                
                    return (alert("Select a Department"))}
            
                else{  file=results;
                     t11=document.querySelector('input[name="dept"]:checked').value;
                    console.log(t11);

                    for(const i of course){
                        if(i.Name===t11){
                             passed=i.passed;
                            //  console.log(passed);
                             regis=i.regis;
                            //  console.log(regis);
                             regis1=i.regis1;
                            //  console.log(regis1);
                             elec=i.elec;
                            //  console.log(elec);
                             chang=i.chang;
                            //  console.log(chang);
                        
                        }
                    }
                    alert("FILE UPLOADED SUCCESFULLY")
                    return(results)}
                
                // console.log(t11);
               
                

            }

          
        } );
        

        }
        
        );

    const conv=document.getElementById('gen').

        
        addEventListener('click', () =>{

        // console.log(file.data);
        for(const stu of file.data){

            // console.log(file.data);
           const stud = stu["Passed Courses"];
           
           let s=[]
        //    console.log(stud);
           if(stud === undefined){ stu['Number of Passed Courses']= "0" }
           else{stu['Number of Passed Courses']= pass(stud).length}
        //    stu['Number of Passed Courses']= pass(stud).length;
          
           if(stu['Entry Level']!="DE"){
            if(stud === undefined){s=["0"]}else{
            s=outS(pass(stud),reg(regis))};
        }else{
            if(stud === undefined){s=["0"]}else{
             s=outS(pass(stud),reg(regis1))};
           }
           stu["Real Outstanding Courses"]=s.toString();
           stu['Number of Real Outstanding Courses']=s.length;
           
            //    const r = outS(reg(elec),s);
           if(s.includes(reg(regis)[reg(regis).length-1])){
            withOP.push(stu);
           }
           else{

                
                const r = outS(reg(elec),s);
                // console.log(stu.Name,r,s);
                
                for(const ip of chang){
                    // console.log(stu.Name,r);
                    if(r.includes(ip[0])){
                        // console.log(ip[1]);
                        let t=r.indexOf(ip[1]);
                        r.splice(t, 1)
                        // console.log(stu.Name,r);
                    }else if (r.includes(ip[1])){
                        let t=r.indexOf(ip[0]);
                        r.splice(t, 1)
                        // console.log(i[0]);
                }
                }
                // console.log(r);
                // console.log([].length);
                stu["Outstanding Compulsory Courses"]=r.toString();
                // console.log(1);
                // if(r.length != 0 ){
                    if(stu['Entry Level']!="DE"){
                        
                        if(Number(stu['TCE'])<120){
                            // console.log(stu);
                            stu['Number of Outstanding Compulsory Courses']="TCE";
                            console.log("TCE");
                            

                        }else{ if(r.length != 0 ){ 
                            stu['Number of Outstanding Compulsory Courses']=r.length;

                            }else{stu['Number of Outstanding Compulsory Courses']=0;
                            stu["Outstanding Compulsory Courses"]="CLEARED";
                                
                            }}

                     }else{
                        if(Number(stu['TCE'])<90){
                            stu['Number of Outstanding Compulsory Courses']="TCE";
                            

                        }else{if(r.length != 0 ){ 
                            stu['Number of Outstanding Compulsory Courses']=r.length;

                            }else{stu['Number of Outstanding Compulsory Courses']=0;
                            stu["Outstanding Compulsory Courses"]="CLEARED";
                            
                        }}

                     }
                    
                //     console.log(r);
                // }else{
                //     stu['Number of Outstanding - ELECT']="cleared";
                //     console.log("dddddddddddddddddddddddd");
                withP.push(stu);
                // console.log(5);
                // console.log(withP);
                }
                
               console.log();
                   
            //    console.log();
        }
        // console.log(withP); 
        

        const tocsv= function(data){
            const rows=[];
            const headers = Object.keys(data[0]);
        
            rows.push(headers.join(','));
        
            for(const row of data){
                 const values=headers.map(header=>{
                     return `"${row[header]}"`; 
                 });
                 rows.push(values.join(','))
                //  console.log(values.join(','));
            }
            return(rows.join('\n'));
        
            
        
            }
            const download= function(data,dd){
                const blob = new Blob([data], {type:'text/csv'});
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement('a');
                a.setAttribute('hidden','');
                a.setAttribute('href',url);
                a.setAttribute('download',`${dd}.csv`);
                document.body.appendChild(a);
                a.click();
                // document.body.replaceChild(a);
        
        }
        
        
        // console.log(tocsv(j));
        
        const csvdata=tocsv(withOP);
        const csvdata1=tocsv(withP);

        download(csvdata,`${t11} without project`);
        download(csvdata1,`${t11} with project`);

        console.log("Preacher Sam")
        alert("FILES DOWNLOADED SUCCESFULLY")
        })
        

        // console.log(file.data[790]);
        // console.log(file.data[790].Name);
        // const s=outS(pass(file.data[790]['Passed Courses']),reg(regis));
        // console.log(outS(reg(elec),s));
        // return(file);
        
    }
    


upload()




// function convert(){
//     const gen=document.getElementById('gen').
//     addEventListener('click',  () => {
//         console.log(upload());
//     })

// }

// convert()


