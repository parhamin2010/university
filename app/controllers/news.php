<?php

class News extends Controller
{
    function __construct()
    {
        parent::__construct();
    }

    function index($id = '')
    {
        if ($id != '' && is_numeric($id)) {
            $id_isset = $this->model->getIssetNews($id);
            if (sizeof($id_isset) > 0) {
                Model::sessionInit();
                $UserID = Model::sessionGet('userId');
                $infoUser = $this->model->getinfoUser($UserID);
                $getNews = $this->model->getNews($id);
                $RateStatus = $this->model->getRating($UserID, "track-" . $id);
                $comment = $this->model->getComment($id);
                $iconfavCheck = $this->model->iconfavCheck($UserID, "track-" . $id);
                $sameNews = $this->model->sameNews($id);
                $getCategory =$this->model->getCategory();
                $getsuggestNews = $this->model->getsuggestNews();

                $data = array('infoUser' => $infoUser, 'getNews' => $getNews, 'RateStatus' => $RateStatus,
                    'iconfavCheck' => $iconfavCheck, 'comment' => $comment, 'sameNews' => $sameNews,
                    'getCategory' => $getCategory,'getsuggestNews' => $getsuggestNews);

                $this->view('news/index', $data);
            } else {
                $detect = new Mobile_Detect;
                $deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');

                $getsuggestNews = $this->model->getsuggestNews();
                $getCategory =$this->model->getCategory();
                $data = array('getsuggestNews' => $getsuggestNews,'getCategory' => $getCategory);

                if($deviceType=='computer') {
                    $this->view('notfound/index', $data);
                }
                else {
                    $this->view('notfound/indexMobile', $data);
                }
            }
        } else {
            $detect = new Mobile_Detect;
            $deviceType = ($detect->isMobile() ? ($detect->isTablet() ? 'tablet' : 'phone') : 'computer');

            $getsuggestNews = $this->model->getsuggestNews();
            $getCategory =$this->model->getCategory();
            $data = array('getsuggestNews' => $getsuggestNews,'getCategory' => $getCategory);

            if($deviceType=='computer') {
                $this->view('notfound/index', $data);
            }
            else {
                $this->view('notfound/indexMobile', $data);
            }
        }
    }

    function addRatingAjax()
    {
        $this->model->addRating($_POST);
    }

    function Addtofavorite()
    {
        Model::sessionInit();
        $UserID = Model::sessionGet('userId');
        $this->model->addfavorite($_POST, $UserID);
    }

    function sendComment()
    {
        $this->model->sendCommentSave($_POST);
    }

}

?>