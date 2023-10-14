<template>
    <div>
      <!-- START : Hero -->
      <section id="hero">
        <div class="absolute text-white z-10 grid h-screen items-end justify-items-start w-full ">
          <div class="mb-32 ml-28">
            <h1 class="text-6xl md:px-38 leading-snug mb-10"><span class="font-bold">Glassboard</span> Eksklusif <br> dengan Kaca <span class="font-bold">Premium</span></h1>
            <a href="#jenis" class="px-9 py-3 text-sm mt-10 border border-white hover:bg-white hover:text-prim-green hover:font-bold transition-all rounded-2xl">Lihat Glassboard</a>
          </div>
        </div>
        <div class="w-full h-screen bg-black absolute opacity-70"></div>
        <div class="w-full h-full">
          <video src="../assets/hero.mp4" autoplay muted loop class="w-full object-cover h-screen"></video>
        </div>
      </section>
      <!-- END : Hero -->
  
      <!-- START : How to Order -->
      <section class="py-28 px-10 md:px-24" id="pemesanan">
        <div>
          <h2 class="text-4xl text-prim-green font-bold">Timeline Glassboard</h2>
          <p class="text-xs leading-loose mt-2 text-sec-green"> Dari awal hingga akhir, kami menuntun Anda melalui perjalanan pemesanan Glassboard yang efisien dan tepat waktu. Dimulai dari saat Anda mengajukan permintaan penawaran hingga pemasangan Glassboard, setiap tahap dalam proses ini diberikan perhatian penuh.</p>
        </div>
        <div class="mt-8 flex gap-10 flex-wrap">
          <div class="flex-2 lg:flex-1 px-4 py-4 text-center rounded-xl shadow hover:shadow-md transition-all hover:shadow-ter-green">
            <img src="../assets/icon-buy.png" class="h-14 mx-auto mb-3" alt="Minta Penawaran Glassboard" width="fit" height="fit">
            <h3 class="text-lg font-bold text-center mb-2">Penawaran</h3>
            <p class="text-xs text-justify leading-relaxed text-sec-green">Mengajukan permintaan untuk glassboard yang di butuhkan. Tim kami akan merespons dengan penawaran yang mencakup informasi tentang spesifikasi, harga, dan perkiraan waktu produksi.</p>
          </div>
          
          <div class="flex-2 lg:flex-1  px-4 py-4 text-center rounded-xl shadow-md hover:shadow-lg transition-all hover:shadow-ter-green">
            <img src="../assets/icon-deliv.png" class="h-14 mx-auto mb-3" alt="Pengiriman Glassboard" width="fit" height="fit">
            <h3 class="text-lg font-bold text-center mb-2">Pengiriman</h3>
            <p class="text-xs text-justify leading-relaxed text-sec-green">Setelah produk selesai diproduksi, kami akan mengemasnya dengan cermat dan mengatur pengiriman sesuai dengan alamat yang telah disepakati sebelumnya.</p>
          </div>
  
          <div class="flex-2 lg:flex-1  px-4 py-4 text-center rounded-xl shadow-md hover:shadow-lg transition-all hover:shadow-ter-green">
            <img src="../assets/icon-install.png" class="h-14 mx-auto mb-3" alt="Pemasanngan Glassboard" width="fit" height="fit">
            <h3 class="text-lg font-bold text-center mb-2">Pemasangan</h3>
            <p class="text-xs text-justify leading-relaxed text-sec-green">Tim ahli kami dapat membantu dalam pemasangan glassboard dengan aman dan presisi. Ini mencakup memasang papan glassboard dengan benar.</p>
          </div>
  
          <div class="flex-2 lg:flex-1  px-4 py-4 text-center rounded-xl shadow-md hover:shadow-lg transition-all hover:shadow-ter-green">
            <img src="../assets/icon-confirm.png" class="h-14 mx-auto mb-3" alt="Serah Terima Glassboard" width="fit" height="fit">
            <h3 class="text-lg font-bold text-center mb-2">Serah Terima</h3>
            <p class="text-xs text-justify leading-relaxed text-sec-green">Dalam tahap ini, Anda memiliki kesempatan untuk memeriksa produk, memastikan semuanya sesuai dengan harapan, dan memberikan persetujuan akhir. </p>
          </div>
        </div>
      </section>
      <!-- END : How to Order -->
      

      <!-- START : Jenis Glassboard (Pro+ Series & Safety Series) -->
      <section id="tipe" class="py-28 px-10 md:px-24">
        <div class="grid grid-cols-2 gap-11 mb-20">
          <div>
            <img src="../assets/variant-addon.jpg" alt="Pro+ Series Glassboard" class="rounded-3xl">
          </div>

          <div>
            <h2 class="font-bold text-5xl text-prim-green mb-7">Pro+ Series</h2>
            <p class="text-sm text-prim-green leading-loose">Glassboard Tipe Pro+ Series adalah papan tulis inovatif yang menggabungkan kaca berkualitas terbaik dengan lapisan cat paint plotter yang tebal, tahan gores, dan anti-kuning. Dengan desain minimalis yang elegan, produk ini cocok untuk berbagai pengaturan, sementara kualitas kaca premium menjamin ketahanan jangka panjang. Instalasi yang mudah dan komitmen terhadap kelestarian lingkungan membuat Glassboard Tipe Pro+ Series menjadi pilihan terbaik bagi mereka yang mencari papan tulis yang tahan lama dan estetis.</p>
            <button class="mt-4 rounded-lg bg-ter-green py-3 px-5 border-2 hover:bg-sec-green transition-colors border-prim-green text-white">Tanya Harga Pro+ Series</button>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-11">

          <div>
            <h2 class="font-bold text-5xl text-prim-green mb-7">Safety Series</h2>
            <p class="text-sm text-prim-green leading-loose">Glassboard Tipe Safety Series menghadirkan kualitas dan keamanan dalam satu produk. Terbuat dari tempered glassboard yang tahan terhadap getaran, papan tulis ini dilengkapi dengan lapisan stiker di belakang kaca untuk menjaga pecahan kaca terkendali saat kerusakan terjadi, menjadikannya pilihan ideal untuk ruang-ruang yang memerlukan keamanan ekstra. Dengan kombinasi kekuatan, ketahanan, dan keindahan, Glassboard Tipe Safety Series adalah solusi terbaik untuk penggunaan medan yang rawan getaran.</p>
            <button class="mt-4 rounded-lg bg-ter-green py-3 px-5 border-2 hover:bg-sec-green transition-colors border-prim-green text-white">Tanya Harga Safety Series</button>
          </div>


          <div>
            <img src="../assets/variant-addon.jpg" alt="Pro+ Series Glassboard" class="rounded-3xl">
          </div>

          
        </div>
      </section>
      
  
      <!-- START : Testimonial -->
      <!-- <section class="py-16 px-10 lg:px-24" id="testi"> -->
        <!-- Headline Text -->
        <!-- <div class="grid grid-cols-1 lg:grid-cols-2 items-start">
          <h2 class="text-4xl leading-normal text-prim-green font-bold">Bagaimana Menurut <br> Mereka ?</h2>
          <p class="text-sec-green leading-loose">kami dengan bangga membagikan pandangan dan pengalaman langsung dari pelanggan-pelanggan kami. Kata-kata mereka adalah cerminan dari kualitas produk dan layanan kami.</p>
        </div> -->
  
        <!-- Testimonial Component -->
        <!-- <div class="px-6 py-10 shadow-lg rounded-lg mt-6 text-center">
          <img src="../assets/variant-addon.jpg" alt="Testimoni Glassboard PT. ABC Indonesia" class="w-28 h-28 rounded-full mx-auto" width="fit" height="fit">
          <h3 class="text-prim-green text-2xl font-bold mt-3">Nama dari Customer</h3>
          <p class="text-xs mt-4 text-sec-green leading-loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente animi veritatis qui laborum ex nulla sunt fugit est. Ipsam voluptates quisquam, rerum repellendus corrupti iure deleniti explicabo error ullam provident?
          Beatae maxime officia quisquam ipsam, enim, saepe reiciendis, nulla vel natus libero odio fugit reprehenderit quia? Unde repudiandae, porro odit iure voluptate culpa iste laboriosam quia debitis voluptatum facilis architecto.
          Voluptatum, nisi dignissimos officia incidunt fugiat ipsa minima cumque est labore, commodi amet quidem recusandae quibusdam aliquam perspiciatis! Est, velit nulla unde a ipsa hic id sint temporibus recusandae aspernatur?</p>
          <h4 class="text-xl italic text-ter-green mt-5">"Direktur PT. ABC Indonesia"</h4>
        </div>
      </section> -->
      <!-- END : Testimonial -->
  
      <!-- START : Pengiriman Seluruh Indonesia -->
      <section class="py-20" id="pengiriman">
        <div class="grid lg:flex gap-1 items-center">
          <div class="flex-1 pl-10 lg:pl-24 pr-10">
            <h2 class="text-4xl font-bold text-prim-green leading-normal">Pengiriman Glassboard ke <span class="italic"> <br>Seluruh Indonesia</span></h2>
            <p class="text-sm text-sec-green mt-4 leading-loose text-justify">Kami dengan bangga menawarkan pengiriman Glassboard kami ke seluruh Indonesia, menjadikan solusi inovatif ini dapat diakses oleh pelanggan di seluruh negeri. Dengan jaringan pengiriman yang luas dan terpercaya, kami memastikan bahwa Glassboard yang Anda pesan akan tiba dengan aman dan tepat waktu, tanpa memandang lokasi Anda.</p>
            <a href="https://api.whatsapp.com/send/?phone=628113050020&text=Halo+Colarof%2C+Saya+ingin+bertanya+tentang+Glassboard&type=phone_number&app_absent=0" class="flex items-center w-fit border bg-prim-green mt-7 px-4 py-2 rounded-xl hover:bg-sec-green transition-colors" target="_blank">
              <img src="../assets/wa-02.png" alt="Whatsapp Tempat Beli Glassboard" class="w-8 mr-2" width="fit" height="fit">
              <p class="text-white font-bold">Hubungi Kami</p>
            </a>
          </div>
          <div class="flex-1">
            <img src="../assets/deliv.png" alt="Pengiriman Glassboard Seluruh Indonesia" width="fit" height="fit">
          </div>
        </div>
      </section>
      <!-- END : Pengiriman Seluruh Indonesia -->
  
      <!-- START : Gallery -->
      <section class="bg-gray py-20 px-10 lg:px-24 text-center" id="galeri">
        <h2 class="text-4xl text-prim-green font-bold">Hasil dari Kerja Kami</h2>
        <p class="text-sec-green text-sm leading-loose mt-2">kami dengan bangga memamerkan berbagai karya unik dan inspiratif yang telah kami ciptakan untuk pelanggan-pelanggan kami. Setiap gambar adalah sebuah cerita visual tentang bagaimana Glassboard kami telah mengubah ruang dan merangkul kreativitas dalam berbagai konteks.</p>
  
        <!-- Galery Components -->
        <div class="grid grid-cols-8 grid-rows-4 gap-4 mt-7 mx-auto">
          
        </div>
      </section>
      <!-- END : Gallery -->
  
      <!-- START : Contact -->
      <section class="py-16 px-10 lg:px-24" id="kontak">
        <div>
          <h2 class="text-prim-green text-4xl font-bold">Hubungi Kami</h2>
          <p class="text-sec-green text-sm leading-loose mt-3">Apakah Anda memiliki pertanyaan, komentar, atau ingin berbicara lebih lanjut tentang produk dan layanan kami? Kami sangat senang untuk membantu. Jangan ragu untuk menghubungi kami melalui salah satu saluran di atas, dan tim kami dengan senang hati akan merespons dengan cepat.</p>
        </div>
        <div class="grid lg:flex items-center mt-7">
  
          <!-- Information -->
          <div class="flex-1">
            <div class="">
              <h3 class="font-bold text-2xl text-prim-green">Alamat Kantor :</h3>
              <p class="text-sm text-sec-green mt-2">Jl. Sepat Lidah Kulon No.215, Surabaya</p>
            </div>
            <div class="mt-5">
              <h3 class="font-bold text-2xl text-prim-green">Nomor Telepon :</h3>
              <a href="https://api.whatsapp.com/send/?phone=628113050020&text=Halo+Colarof%2C+Saya+ingin+bertanya+tentang+Glassboard&type=phone_number&app_absent=0" class="text-sm text-sec-green mt-2" target="_blank">+62 811-3050-020</a>
            </div>
            <div class="mt-5">
              <h3 class="font-bold text-2xl text-prim-green">Email :</h3>
              <p class="text-sm text-sec-green mt-2">colar.creativ@gmail.com</p>
            </div>
            <div class="mt-5">
              <h3 class="font-bold text-2xl text-prim-green">Jam Operasional :</h3>
              <p class="text-sm text-sec-green mt-2">Senin - Jumat</p>
              <p class="text-sm text-sec-green mt-2">Jam 08.00 - 17.00 WIB</p>
            </div>
            <!-- <div class="mt-5">
              <h3 class="font-bold text-2xl text-prim-green">Media Sosial :</h3>
              <p class="text-sm text-sec-green mt-2">colar.creativ@gmail.com</p>
            </div> -->
          </div>
  
          <!-- Map Embed -->
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2422.0522029307035!2d112.65363102692564!3d-7.305628755131026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fdabb3823df7%3A0x7463d8752d9f5574!2sColar%20Creativ%20Industri!5e0!3m2!1sid!2sid!4v1692688031308!5m2!1sid!2sid" width="600" height="400" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="rounded-lg w-full lg:w-[600px] mt-10 lg:mt-0"></iframe>
          </div>
        </div>
      </section>
      <!-- END : Contact -->
  
      <!-- START : Footer -->
      <footer class="py-24 lg:py-16 px-10 lg:px-24 bg-prim-green">
        <div class="grid grid-cols-6 grid-rows-2">
          <div class="row-span-2 col-span-6 md:col-span-1 text-center md:text-left">
            <a href="#hero" class="font-bold">
              <img src="../assets/logo-putih.png" alt="Logo Colarof Glassboard Indonesia" width="fit" height="fit" class="w-16 mx-auto md:mx-0 md:mr-auto">
            </a>  
            <p class="text-xs text-white mt-4">Copyright @2020</p>
          </div>
          <div class="col-span-6 lg:col-span-4 mt-10 lg:mt-0">
  
            <!-- Quick Link -->
            <div class="grid grid-cols-3 gap-y-6">
              <div class="flex items-center">
                <div class="w-[2px] h-5 bg-white"></div>
                <a href="#pemesanan" class="text-white text-sm ml-4">Pemesanan </a>
              </div>
              <div class="flex items-center">
                <div class="w-[2px] h-5 bg-white"></div>
                <a href="#jenis" class="text-white text-sm ml-4">Jenis </a>
              </div>
              <div class="flex items-center">
                <div class="w-[2px] h-5 bg-white"></div>
                <a href="#testi" class="text-white text-sm ml-4">Testimoni </a>
              </div>
              <div class="flex items-center">
                <div class="w-[2px] h-5 bg-white"></div>
                <a href="#pengiriman" class="text-white text-sm ml-4">Pengiriman </a>
              </div>
              <div class="flex items-center">
                <div class="w-[2px] h-5 bg-white"></div>
                <a href="#galeri" class="text-white text-sm ml-4">Galeri </a>
              </div>
              <div class="flex items-center">
                <div class="w-[2px] h-5 bg-white"></div>
                <a href="#kontak" class="text-white text-sm ml-4">Kontak </a>
              </div>
            </div>
  
            <!--  -->
          </div>
  
          <!-- Button -->
          <div class="col-span-6 lg:col-span-1 mx-auto md:mx-0 mt-10 lg:mt-0">
            <a href="https://api.whatsapp.com/send/?phone=628113050020&text=Halo+Colarof%2C+Saya+ingin+bertanya+tentang+Glassboard&type=phone_number&app_absent=0" target="_blank" class="px-4 py-2 bg-pastel text-prim-green rounded-xl text-sm font-bold hover:bg-white transition-colors" >Hubungi Kami</a>
          </div>
          <div class="col-span-5 self-center">
            <hr class="hidden lg:block">
          </div>
        </div>
      </footer>
      <!-- END : Footer -->
    </div>
  
    <!-- START : Bottom Bar -->
    <div class="w-full h-16 flex md:hidden bg-sec-green fixed z-40 bottom-0 items-center content-center px-4 text-center">
      <div class="flex-1 mx-auto">
        <a href="#kontak">
          <img src="../assets/bottom-02.png" alt="Hubungi Customer Service Glassboard Indonesia" class="h-7 mx-auto" width="fit" height="fit">
        </a>
      </div>
      <div class="flex-1">
        <a href="#pengiriman">
          <img src="../assets/bottom-03.png" alt="Glassboard Seluruh Indonesia" class="h-7 mx-auto" width="fit" height="fit">
        </a>
      </div>
      <div class="flex-1">
        <a href="#jenis">
          <img src="../assets/bottom-04.png" alt="Variant Produk Glassboard" class="h-7 mx-auto" width="fit" height="fit">
        </a>
      </div>
      <div class="flex-1">
        <a href="https://api.whatsapp.com/send/?phone=628113050020&text=Halo+Colarof%2C+Saya+ingin+bertanya+tentang+Glassboard&type=phone_number&app_absent=0" target="_blank">
          <img src="../assets/wa-png-02.png" alt="Nomor Pemesanan Glassboard" class="h-7 mx-auto" width="fit" height="fit">
        </a>
      </div>
      
    </div>
    <!-- END : Bottom Bar -->
  </template>