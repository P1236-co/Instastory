var arr = [
  {
    dp: "https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/494642842_2394092117634206_3809697928692290011_n.jpg?_nc_cat=110&cb=99be929b-ca288af0&ccb=1-7&_nc_sid=669761&_nc_eui2=AeEOVUlgCqL3nU14XNWibwcj7XwbrCPnCnHtfBusI-cKcfiq0dO-2y3JKYgRFES3bLovHN94AKJi7HhGMdWbVPCY&_nc_ohc=Iu92AraJ_igQ7kNvwGAoq7q&_nc_oc=AdlKkxpjrFtSld-mxiTQgBsgJcL50VLyqqMVOrVcOjGBDCNusKVWOAcyP9vGnxZUIhc&_nc_zt=23&_nc_ht=scontent.fktm6-1.fna&_nc_gid=iGLok2mhXOqwVAPvVnx4mA&oh=00_AfT2YarR6cqt-HB42f4bjz34TDZ6BZ8YirjkWGVTL09VDQ&oe=688157F6",
    stories:
      "https://scontent.fktm6-1.fna.fbcdn.net/v/t39.30808-6/494642842_2394092117634206_3809697928692290011_n.jpg?_nc_cat=110&cb=99be929b-ca288af0&ccb=1-7&_nc_sid=669761&_nc_eui2=AeEOVUlgCqL3nU14XNWibwcj7XwbrCPnCnHtfBusI-cKcfiq0dO-2y3JKYgRFES3bLovHN94AKJi7HhGMdWbVPCY&_nc_ohc=Iu92AraJ_igQ7kNvwGAoq7q&_nc_oc=AdlKkxpjrFtSld-mxiTQgBsgJcL50VLyqqMVOrVcOjGBDCNusKVWOAcyP9vGnxZUIhc&_nc_zt=23&_nc_ht=scontent.fktm6-1.fna&_nc_gid=iGLok2mhXOqwVAPvVnx4mA&oh=00_AfT2YarR6cqt-HB42f4bjz34TDZ6BZ8YirjkWGVTL09VDQ&oe=688157F6",
  },
  {
    dp: "https://img.freepik.com/free-photo/medium-shot-woman-sitting-chair_23-2149392849.jpg?semt=ais_hybrid&w=740",
    stories:
      "https://img.freepik.com/free-photo/medium-shot-woman-sitting-chair_23-2149392849.jpg?semt=ais_hybrid&w=740",
  },
  {
    dp: "https://i.pinimg.com/474x/0c/8e/f7/0c8ef7b35d150dd04a771c1ea44c06a6.jpg",
    stories:
      "https://i.pinimg.com/474x/0c/8e/f7/0c8ef7b35d150dd04a771c1ea44c06a6.jpg",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uS4neTzzJzzXkHJZZXVcBP4z7TgTOJ8LVA&s",
    stories:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4uS4neTzzJzzXkHJZZXVcBP4z7TgTOJ8LVA&s",
  },
  {
    dp: "https://qph.cf2.quoracdn.net/main-qimg-817fcda03678b623ef5fbaa2d48c3e39-lq",
    stories:
      "https://qph.cf2.quoracdn.net/main-qimg-817fcda03678b623ef5fbaa2d48c3e39-lq",
  },
];
var story = document.querySelector("#story");
var clutter = "";
arr.forEach(function (elem, idx) {
  clutter += `<div class="stories">
           <img  id=${idx} src="${elem.dp}" alt="" />


    </div>`;
  console.log(clutter);
});
document.querySelector("#story").innerHTML = clutter;
story.addEventListener("click", function (dets) {
  document.querySelector(".full-Screen").style.display = "block";
  document.querySelector(".full-Screen").style.backgroundImage = `url(${
    arr[dets.target.id].stories
  })`;
  setTimeout(function () {
    document.querySelector(".full-Screen").style.display = "none";
  }, 1000);
});
