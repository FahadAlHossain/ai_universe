const loadData = async (showBtn) => {
  const res = await fetch("https://openapi.programming-hero.com/api/ai/tools");
  const data = await res.json();
  const load = data.data;
  displayData(load,showBtn);
};

const displayData = (data,showBtn) => {
//   console.log(data.tools);
//   const totalCard = data.tools
const showContainer = document.getElementById('show-all')

if(data.tools.length === 12 && showBtn){
    showContainer.classList.add('hidden')
}

if(!showBtn){
    data.tools = data.tools.slice(0,6);
}else{
    data.tools = data.tools.slice(6,12)
}


//   if(totalCard > 12){}
  // data.tools.forEach(item=>console.log(item.image))
  const getPostContainer = document.getElementById("post-container");
  for (const all in data) {
    if (data.hasOwnProperty(all)) {
      // console.log(all, data[all]); // Key-value pairs
      // console.log(data[all])
      data[all].forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card bg-white shadow-xl h-full">
                <figure>
                  <img
                    src="${item?.image}"/>
                </figure>
                <div class="card-body text-black">
                  <h2 class="card-title font-semibold">Features</h2>
                  <ol class="text-lg text-gray-500 list-decimal px-4 mx-4 mb-3">
                    <li>${item?.features[0]}</li>
                    <li>${item?.features[1]}</li>
                    <li>${item?.features[2]}</li>
                  </ol>
                  <hr>
                  <h2 class="card-title">${item?.name}</h2>
                  <span>${item?.published_in}</span>
                  <div class="card-actions justify-end">
                    <button class="btn" onclick="showDetails('${item.id}')">Details</button>
                  </div>
                </div>
              </div>
        `;
        getPostContainer.appendChild(div);
      });
    }
  }
};

const showModalDetails = (data) =>{
    my_modal_3.showModal();
    const contentDetails = document.getElementById('details');
    // const div = document.createElement('div');
    contentDetails.innerHTML = data.pricing ? `
    <div class="bg-red-100 border-2 border-red-500 p-5 w-96 rounded-xl">
        <h1 class="text-1xl font-semibold text-black mb-4">${data?.description}</h1>
        <div class="grid grid-cols-3 gap-2 text-center items-center">
            <p class="text-sm p-4 rounded-xl h-full pt-6 bg-red-50 text-green-600 font-semibold">${data?.pricing[0]?.price} ${data?.pricing[0]?.plan}</p>
            <p class="text-sm p-4 rounded-xl h-full pt-6 bg-red-50 text-orange-600 font-semibold">${data?.pricing[1]?.price} ${data?.pricing[1]?.plan}</p>
            <p class="text-sm p-4 rounded-xl h-full bg-red-50 text-red-600 font-semibold">${data?.pricing[2]?.price} ${data?.pricing[2]?.plan}</p>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-5">
            <div>
                <h1 class="text-1xl font-semibold mb-2 text-black">Features</h1>
                <ul class="list-disc pl-4 ml-4">
                    <li class="text-gray-600 text-xs">${data?.features['1']?.feature_name}</li>
                    <li class="text-gray-600 text-xs">${data?.features['2']?.feature_name}</li>
                    <li class="text-gray-600 text-xs">${data?.features['3']?.feature_name}</li>
                </ul>
            </div>
            <div>
                <h1 class="text-1xl font-semibold  mb-2 text-black">Integration</h1>

                <ul class="list-disc pl-4 ml-4">
                    <li class="text-gray-600 text-xs">${data?.integrations[0]}</li>
                    <li class="text-gray-600 text-xs">${data?.integrations[1]}</li>
                    <li class="text-gray-600 text-xs">${data?.integrations[2]}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="card bg-white w-96 border-solid border-2  px-4 pt-4 border-slate-300">
        <div class="avatar indicator">
            <span class="indicator-item badge badge-error text-white font-medium p-3 mr-14 mt-3">${data?.accuracy.score*100}% accuracy</span>
            <div class="w-[350px] h-60 rounded-lg">
                <img
                src="${data?.image_link[0]}" />
            </div>
        </div>
        <div class="card-body items-center  text-black text-center">
            <h2 class="card-title">${data?.input_output_examples[0]?.input}</h2>
            <p>${data?.input_output_examples[0]?.output}</p>
        </div>
    </div>
    
    `
    : `<div class="bg-red-100 border-2 border-red-500 p-5 w-96 rounded-xl">
        <h1 class="text-1xl font-semibold text-black mb-4">${data?.description}</h1>
        <div class="grid grid-cols-3 gap-2 text-center items-center">
            <p class="text-sm p-4 rounded-xl h-full pt-5 bg-red-50 text-green-600 font-semibold">Free Of Cost/Basic</p>
            <p class="text-sm p-4 rounded-xl h-full pt-5 bg-red-50 text-orange-600 font-semibold">Free Of Cost/Pro</p>
            <p class="text-sm p-4 rounded-xl h-full bg-red-50 text-red-600 font-semibold">Free Of Cost/\nEnterprise</p>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-5">
            <div>
                <h1 class="text-1xl font-semibold mb-2 text-black">Features</h1>
                <ul class="list-disc pl-4 ml-4">
                    <li class="text-gray-600 text-xs">${data?.features['1']?.feature_name}</li>
                    <li class="text-gray-600 text-xs">${data?.features['2']?.feature_name}</li>
                    <li class="text-gray-600 text-xs">${data?.features['3']?.feature_name}</li>
                </ul>
            </div>
            <div>
                <h1 class="text-1xl font-semibold  mb-2 text-black">Integration</h1>
                <span class="text-gray-600 text-xs">NO Data Found</span>
            </div>
        </div>
    </div>
    <div class="card bg-white w-96 border-solid border-2  px-4 pt-4 border-slate-300">
        <div class="avatar indicator">
            <div class="w-[350px] h-60 rounded-lg">
                <img
                src="${data?.image_link[0]}" />
            </div>
        </div>
        <div class="card-body items-center  text-black text-center">
            <h2 class="card-title">Can u give an examples?</h2>
            <p>No! Not Yet! Take a break!!!</p>
        </div>
    </div>
    `;
    // contentDetails.appendChild(div);

}

const showDetails = async (id) =>{
  const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
  const data = await res.json();
  const load = data.data;
//   console.log(load,id);
  showModalDetails(load);
}

const closeBtn = () => {
    const contents = document.getElementById('details');
    contents.textContent = '';
}

const showAll = () =>{
    loadData(true);
}

loadData();
