<template>
  <div class="container">
    <div class="articles-blog-post">
      <div class="row">
        <div class="col-xs-12 col-lg-12">
          <article class="articles">
            <div class="articles-header">İletişim</div>
            <div class="d-flex justify-content-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.7340435376254!2d32.8370404568258!3d39.92496758769595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34f190a9cea8f%3A0xd3862ea8248d08a0!2sAn%C4%B1tkabir!5e0!3m2!1str!2str!4v1665600105363!5m2!1str!2str" width="93%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="articles-content px-8">
              <form>
                <div class="mb-3">
                  <input type="text" class="k91Contact" placeholder="Ad Soyad"/>
                </div>
                <div class="mb-3">
                  <input type="email" class="k91Contact" placeholder="Email"/>
                </div>
                <div class="mb-3">
                  <textarea class="k91Contact" placeholder="Mesajınız" />
                </div>

                <button type="submit" class="btn btn-primary">Gönder</button>
              </form>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>

<style scoped>
form{
  margin-top:20px;
}
.k91Contact {
  color:rgb(37, 37, 37);
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-weight:500;
  font-size: 18px;
  border-radius: 5px;
  line-height: 10px;
  background-color: transparent;
  border:0.5px solid rgba(202, 202, 202, 0.867);
  transition: all 0.3s;
  padding: 10px;
  margin-bottom: 15px;
  width:100%;
  box-sizing: border-box;
  outline:0;
}
.k91Contact::placeholder {
  color:rgba(230, 230, 230, 0.867);
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  font-size:16px
}

.k91Contact:focus { border:1px solid rgb(56, 183, 234); }

textarea {
  height: 150px;
  line-height: 150%;
  resize:vertical;
}

[type="submit"] {
  font-family: 'Poppins', Arial, Helvetica, sans-serif;
  width: 100%;
  background:rgb(56, 183, 234);
  border-radius:5px;
  border:0;
  cursor:pointer;
  color:white;
  font-size:20px;
  margin-bottom:20px;
  transition: all 0.3s;
  margin-top:-4px;
  font-weight:500;
}
[type="submit"]:hover { background:rgb(30, 150, 197); }
</style>