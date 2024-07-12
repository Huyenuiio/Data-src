
 // Tạo một mảng chứa thông tin
 const dataa = [
    { name: "Fate/Zero", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png" },
    { name: "Hibike! Euphonium", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20912-IgPaqyrZln2p.jpg" },
    // Thêm các phần tử khác vào mảng
    { name: "Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162804-TBeptcAfvqTd.jpg" },
    { name: "Shikanoko Nokonoko Koshitantan", image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx175977-miHFASI6TXHH.jpg" }, 
];

// Hiển thị thông tin từ mảng lên giao diện
function displayData() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Xóa nội dung cũ

    dataa.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.image}" alt="${item.name}">
        `;
        resultDiv.appendChild(itemDiv);
    });
}

// // Khi nhập từ khóa vào thanh tìm kiếm, gọi hàm hiển thị dữ liệu
// document.getElementById("searchButton").addEventListener("click", function() {
//     const keyword = document.getElementById("searchInput").value;
//     if (keyword === "danhtinh") {
//         displayData();
//     }
//     else {
//         // Xóa nội dung trên trang web
//         const resultDiv = document.getElementById("result");
//         resultDiv.innerHTML = "";
//     }
// });

// Khi nhập từ khóa vào thanh tìm kiếm và nhấn phím "Enter"
document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const keyword = document.getElementById("searchInput").value;
        if (keyword === "anime") {
            displayData();
        } else {
            // Xóa nội dung trên trang web
            const resultDiv = document.getElementById("result");
            resultDiv.innerHTML = "";
        }
    }
});















 // JavaScript của bạn
 let data = {
               
               "Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Tokidoki%20Bosotto%20Russiago%20de%20Dereru%20Tonari%20no%20Alya-san/ep1/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Tokidoki%20Bosotto%20Russiago%20de%20Dereru%20Tonari%20no%20Alya-san/subtitle/srt/ep1/%5BSubtitleTools.com%5D%20%5BSubsPlease%5D%20Tokidoki%20Bosotto%20Russia-go%20de%20Dereru%20Tonari%20no%20Alya-san%20-%2001%20(480p)%20%5BCFDF5DE1%5D.srt",
                   text3:"Tập 1 - Alya giấu cảm xúc của mình bằng tiếng Nga",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162804-TBeptcAfvqTd.jpg"
               },
               // Thêm các từ khóa và văn bản tương ứng khác ở đây
               "Hibike! Euphonium ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/tap1/outputt.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/tap1/%5BSubtitleTools.com%5D%20%5BCrazy-SoL%5D%20Hibike!%20Euphonium%20-%2001%20%5BBDRip%201080p%20AVC%5D%5BFLAC%5D.srt",
                   text3:"Tập 1",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20912-IgPaqyrZln2p.jpg"
               },
                 "Hibike! Euphonium ep2": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/ep2/outputt.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/ep2/%5BSubtitleTools.com%5D%20%5BCrazy-SoL%5D%20Hibike!%20Euphonium%20%5B02%5D%5BHi10p_1080p%5D%5Bx264_flac%5D.srt",
                   text3:"Tập 2 - Mong được giúp đỡ, Euphonium",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20912-IgPaqyrZln2p.jpg"
               },
               "Hibike! Euphonium ep3": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/tap3/outputt.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Hibike%20Euphonium/tap3/%5BSubtitleTools.com%5D%20%5BCrazy-SoL%5D%20Hibike!%20Euphonium%20-%2003%20%5BBDRip%201080p%20AVC%5D%5BFLAC%5D.srt",
                   text3:"Tập 3 - Lần hòa tấu đầu tiên.",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20912-IgPaqyrZln2p.jpg"
               },
               "Fate/Zero ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/epp1/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/epp1/E1%20-%20Tri%E1%BB%87u%20h%E1%BB%93i%20Anh%20Linh%20%5B367568%5D.vi.srt",
                   text3:"Tập 1 - Triệu Hóa Anh Linh",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               "Fate/Zero ep2": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep2/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep2/E2%20-%20S%E1%BB%B1%20kh%E1%BB%9Fi%20%C4%91%E1%BA%A7u%20c%E1%BB%A7a%20cu%E1%BB%99c%20chi%E1%BA%BFn%20gi%E1%BA%A3%20d%E1%BB%91i%20%5B367569%5D.vi.srt",
                   text3:"Tập 2 - Ngụy Đoan",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
              
               "Shikanoko Nokonoko Koshitantan ep1": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Shikanoko%20Nokonoko%20Koshitantan/ep1/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Data-src/main/video/Shikanoko%20Nokonoko%20Koshitantan/ep1/subtitle/ass/ep1/%5BIoroid%5D%20Shikanoko%20Nokonoko%20Koshitantan%20-%2001%20%5BABEMA%20WEB-DL%201080p%20AVC%20AAC%5D.ass",
                   text3:"Tập 1",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx175977-miHFASI6TXHH.jpg"
               },
               "dir /d": {
                   text3:"/ Tokidoki Bosotto Russiago de Dereru Tonari no Alya-san / \n / Hibike! Euphonium / \n / Fate/Zero / \n / Shikanoko Nokonoko Koshitantan /",
               },
               
                "Fate/Zero ep3": {
                   text: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep3/output.m3u8",
                   text2: "https://raw.githubusercontent.com/Huyenuiio/Fate-Zero/main/ep3/E3%20-%20V%C3%B9ng%20%C4%91%E1%BA%A5t%20Fuyuki%20%5B367570%5D.vi.srt",
                   text3:"Tập 3 - Lãnh Địa Fuyuki",
                   image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10087-el5Bo1VMZwsU.png"
               },
               
               "`": {
                   text: "",
                   text2: "",
                   image: ""
               },
           };

           function displayTextAndImage(keyword) {
               let dataForKeyword = data[keyword];
               let resultDiv = document.getElementById('result');

            //    // Xóa kết quả tìm kiếm cũ
            //    resultDiv.innerHTML = '';

               if (dataForKeyword) {
                   // let p = document.createElement('p');
                   // p.textContent = dataForKeyword.text;
                   // resultDiv.appendChild(p);
                   
                   // let a = document.createElement('a');
                   // a.textContent = dataForKeyword.text2;
                   // resultDiv.appendChild(a);
                   // Lấy giá trị từ các trường văn bản
                   
                   

                    let a = document.createElement('a');
                   a.textContent = dataForKeyword.text3;
                   resultDiv.appendChild(a);

                   let text1 = dataForKeyword.text;
                   let text2 = dataForKeyword.text2;

                   let img = document.createElement('img');
                   img.src = dataForKeyword.image;
                   resultDiv.appendChild(img);

                   // Thêm nút sao chép văn bản
                   let copyTextButton = document.createElement('button')
                   // document.getElementById(copyTextButton)
                       copyTextButton.textContent = 'Sao chép video';
                   copyTextButton.addEventListener('click', function() {
                       navigator.clipboard.writeText(text1);
                   });
                   resultDiv.appendChild(copyTextButton);
                           
       
                   // const loadingElement = document.getElementById('copyTextButton');
                   // loadingElement.style.display = 'block';



                   let copyImageButton = document.createElement('button'); 
                   // document.getElementById(copyImageButton)
                   copyImageButton.textContent = 'Sao chép subtitle';
                   copyImageButton.addEventListener('click', function() {
                   navigator.clipboard.writeText(text2);
   });
                   resultDiv.appendChild(copyImageButton);

                   // const text2Element = document.getElementById('copyImageButton');
                   // text2Element.style.display = 'block';




               }
             
           }
   
           document.getElementById('searchButton').addEventListener('click', function() {
               let keyword = document.getElementById('searchInput').value;
               displayTextAndImage(keyword);
           });
           

           document.getElementById('searchInput').addEventListener('keyup', function(event) {
       if (event.key === 'Enter') {
           // Thực hiện tìm kiếm ở đây
           let keyword = document.getElementById('searchInput').value;
           displayTextAndImage(keyword);

       }
   });

