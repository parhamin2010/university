<?php

class Index extends Controller
{
    function __construct()
    {
        parent::__construct();
    }


    function index()
    {
        $detect = new Mobile_Detect;
        $deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');

        $getPrice = $this->model->getPrices();
        $getNews = $this->model->getNews();
        $sliders =$this->model->sliders();
        $getCategory =$this->model->getCategory();
        $getsuggestNews = $this->model->getsuggestNews();
        $getCategory =$this->model->getCategory();
        $getNewsVip = $this->model->getNewsVip();

        $data = array( 'getNewsVip' => $getNewsVip,'sliders' => $sliders,'getPrice' => $getPrice,'getNews' => $getNews,'getCategory' => $getCategory,'getsuggestNews' => $getsuggestNews,'getCategory' => $getCategory);

        if($deviceType=='computer') {
            $this->view('index/index', $data);
        }
        else if($deviceType=='tablet') {
            $this->view('index/index', $data);
        }
        else {
            $this->view('index/index', $data);
        }
//        $data = array();
    }

    public function LoginRegular()
    {
        $this->model->regularLogin($_POST);
    }
}

?>