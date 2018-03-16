<?php

class model_topic extends Model
{

    function __construct()
    {
        parent::__construct();
    }

    function getsuggestNews()
    {
        $sql = "SELECT a.*,b.name,c.i_image,c.i_id FROM tbl_news a
                LEFT JOIN tbl_category b 
                ON a.cat_id=b.id
                LEFT JOIN tbl_images c 
                ON a.image_id=c.i_id
                WHERE a.status=1
                ORDER BY rand() DESC LIMIT 4";
        $result = $this->doSelect($sql);
        return $result;
    }

    function getTopNews($id)
    {
        $sql = "SELECT a.*,b.name,c.i_image,c.i_id FROM tbl_news a
                LEFT JOIN tbl_category b 
                ON a.cat_id=b.id
                LEFT JOIN tbl_images c 
                ON a.image_id=c.i_id
                WHERE a.status=1 AND a.cat_id=?
                ORDER BY a.view DESC LIMIT 6";
        $param = array($id);
        $result = $this->doSelect($sql, $param);
        return $result;
    }

    function getCategory()
    {
        $sql = "SELECT * FROM tbl_category WHERE status=1";
        $data = self::doSelect($sql);
        return $data;
    }

    function getIssetCategory($id)
    {
        $sql = "SELECT id FROM tbl_category WHERE id= ?";
        $param = array($id);
        $result = $this->doSelect($sql, $param);
        return $result;
    }

    function getCountNews($id)
    {
        $sql = "SELECT count(*) as count FROM tbl_news WHERE cat_id= ?";
        $param = array($id);
        $result = $this->doSelect($sql, $param);
        return $result;
    }

    function getNews($id)
    {
        $sql = "SELECT a.*,b.name,c.i_image,c.i_id FROM tbl_news a
                LEFT JOIN tbl_category b 
                ON a.cat_id=b.id
                LEFT JOIN tbl_images c 
                ON a.image_id=c.i_id
                WHERE a.status=1 AND a.cat_id=?
                ORDER BY a.n_id DESC LIMIT 36";
        $params = array($id);
        $result = $this->doSelect($sql, $params);
        return $result;
    }

    function getNewsVip($id)
    {
        $sql = "SELECT a.*,b.name,c.i_image,c.i_id FROM tbl_news a
                LEFT JOIN tbl_category b 
                ON a.cat_id=b.id
                LEFT JOIN tbl_images c 
                ON a.image_id=c.i_id
                WHERE a.status=1 AND a.vip=1 AND a.cat_id=?
                ORDER BY a.n_id DESC LIMIT 36";
        $params = array($id);
        $result = $this->doSelect($sql, $params);
        return $result;
    }

}

?>