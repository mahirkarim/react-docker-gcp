import "./Home.css";
//import VideoPage from './components/VideoPage.js' //then add <VideoPage/> tag
import logo from "./logo.svg";
import pic from "./assets/img/img2.png";
import areeb from "./assets/img/IMG_0030.jpeg";
import sarah from "./assets/img/IMG_0054.jpeg";
import mahir from "./assets/img/IMG_0048.jpeg";
import altLogo from "./assets/img/image3.jpeg";
import App from "./App.js";
import SignInSide from "./components/SignInSide.js";

function Home() {
  return (
    <div className="App">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Grayscale - Start Bootstrap Theme</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        <script
          src="https://use.fontawesome.com/releases/v5.15.1/js/all.js"
          crossorigin="anonymous"
        ></script>
        <link
          href="https://fonts.googleapis.com/css?family=Varela+Round"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
          rel="stylesheet"
        />

        <link href="css/styles.css" rel="stylesheet" />
      </head>
      <body id="page-top"></body>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          {/* <a class="navbar-brand js-scroll-trigger" href="#page-top"> <img className="icon" src={pic}/></a> */}
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/SignIn">
                  Sign In
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#projects">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="#signup">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header class="masthead">
        <div class="container d-flex h-100 align-items-center">
          <div class="mx-auto text-center">
            <h1 class="mx-auto my-0 text-uppercase">Merge Health</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              Giving people control over their health information.
            </h2>
            <a class="btn btn-primary js-scroll-trigger" href="#about">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <section class="about-section text-center" id="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h2 class="text-white mb-4">Who are we?</h2>
              <p class="text-white-50">
                Merge Health is a social platform dedicated to helping users
                better manage their health information and fully realize the
                value of their data by consolidating their medical records,
                providing key data insights, and connecting them with their
                peers to learn from them and to support each other's health
                goals. Initially, we are offering a service to connect users
                with their friends while practicing daily healthy habits, but we
                aim to quickly expand into ethical big data collection. If you
                would like to connect with your friends and share your daily
                routines, please
                <a href="https://app.mergehealth.us/SignIn"> sign in </a>
                here.
              </p>
            </div>
          </div>
          <img class="img-fluid" src="assets/img/ipad.png" alt="" />
        </div>
      </section>
      <section class="projects-section bg-light" id="projects">
        <div class="container">
          <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <div class="col-xl-8 col-lg-7">
              <img
                class="img-fluid mb-3 mb-lg-0"
                className="bigicon"
                src={altLogo}
                alt=""
              />
            </div>
            <div class="col-xl-4 col-lg-5">
              <div class="featured-text text-center text-lg-left">
                <h4>Meet the team</h4>
                <p class="text-black-50 mb-0">
                  We have three cofounders from diverse educational backgrounds,
                  but each one of us is passionate about ethically managing data
                  and improving people's lives through their health.{" "}
                </p>
              </div>
            </div>
          </div>

          <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div class="col-lg-6">
              <img class="img-fluid" src={areeb} alt="" />
            </div>
            <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-white">Areeb Afridi</h4>
                    <p class="mb-0 text-white-50">
                      Areeb is a proud Pakistani-American who majored in Human
                      Evolutionary Biology at Harvard. He is passionate about
                      conducting clinical research, and his hobbies include
                      playing basketball and "winning" fantasy football.
                    </p>
                    <hr class="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center no-gutters">
            <div class="col-lg-6">
              <img class="img-fluid" src={sarah} alt="" />
            </div>
            <div class="col-lg-6 order-lg-first">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-right">
                    <h4 class="text-white">Sarah Stukalin</h4>
                    <p class="mb-0 text-white-50">
                      Sarah was a premed Medicine, Health, and Society major at
                      Vanderbilt University. The only left-handed member of the
                      team, she enjoys floatation tanks and playing soccer, and
                      she aspires to eventually be the CEO of a publicly traded
                      company.
                    </p>
                    <hr class="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div class="col-lg-6">
              <img class="img-fluid" src={mahir} alt="" />
            </div>
            <div class="col-lg-6">
              <div class="bg-black text-center h-100 project">
                <div class="d-flex h-100">
                  <div class="project-text w-100 my-auto text-center text-lg-left">
                    <h4 class="text-white">Mahir Karim</h4>
                    <p class="mb-0 text-white-50">
                      Mahir went to the University of Texas at Austin for
                      computer science and government. He hopes to apply data
                      strategies to improve political campaigns and better
                      inform public policy. When he's not coding, he likes to
                      run and play chess.
                    </p>
                    <hr class="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="signup-section" id="signup">
        <div class="container">
          <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto text-center">
              <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 class="text-white mb-5">Subscribe to receive updates!</h2>
              <form class="form-inline d-flex">
                <input
                  class="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputEmail"
                  type="email"
                  placeholder="Enter email address..."
                />
                <button class="btn btn-primary mx-auto" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-section bg-black">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Address</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    1 Highland Park Village, Dallas, TX 75205
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-envelope text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Email</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">
                    <a href="#!">TBD</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 mb-3 mb-md-0">
              <div class="card py-4 h-100">
                <div class="card-body text-center">
                  <i class="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 class="text-uppercase m-0">Phone</h4>
                  <hr class="my-4" />
                  <div class="small text-black-50">(214) 673-8778</div>
                </div>
              </div>
            </div>
          </div>
          <div class="social d-flex justify-content-center">
            <a class="mx-2" href="#!">
              <i class="fa fa-twitter"></i>
            </a>
            <a class="mx-2" href="#!">
              <i class="fa fa-facebook-f"></i>
            </a>
            <a class="mx-2" href="#!">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      <footer class="footer bg-black small text-center text-white-50">
        <div class="container">Copyright ?? Merge Health 2021</div>
      </footer>
    </div>
  );
}

export default Home;
