<?php
	Class mainAction extends Action{
		//分页处理
		Public function page($kind){
			$menu = M("qinshu.course",null);
			//获取总页数
			$count = $menu->where("type =  $kind ")->count();
			$page = intval(intval($count)/20)+1;
			
			//获取当前页面
			$cur_page = intval($this->_get("page"));
			if(!$cur_page){
				$cur_page = 1;
			}
			if($cur_page > $page || $cur_page < 1){
 				$this->redirect(" ");
			}
			if($page == 1){
				$pre_page = $next_page =1;
			}
			else{
				if($cur_page != $page && $cur_page != 1){
					$pre_page = $cur_page-1;
					$next_page = $cur_page+1;
				}
				else if($cur_page == 1){
					$pre_page=$cur_page;
					$next_page = $cur_page+1;
				}
				else{
					$pre_page = $cur_page-1;
					$next_page = $cur_page;
				}
			}
			
			$p = ($cur_page-1)*20;
			$list = $menu->where("type =  $kind ")->limit("$p,20")->select();
			$this->assign('pre_page',$pre_page);
			$this->assign('next_page',$next_page);
			$this->assign('cur_page',$cur_page);
			$this->assign('page',$page);
			$this->assign('song',$list);			
		}
		
		Public function index(){
			$list = M("qinshu.course",null);
			$song = $list->limit(14)->where("sign = 0")->select();
			$this->assign('song',$song);
			$this->display("index");
		}
		
		Public function ukulele(){
			$this->page(1);
			$this->display("pUkulele");
		}
		
		Public function guitar(){
			$this->page(0);
			$this->display("pGuitar");
		}
		
		Public function video(){
			$this->display("videoCC");
		}
		
		Public function message(){
			$this->display("message");
		}
		
		Public function videoShow(){
			$c_id = $_GET["c_id"];
			if($c_id == null) $c_id = 1;
			$course = M("qinshu.course",null);
			$back_list = $course->query("select name,simple_score,video,info from course where c_id = $c_id");
			$this->assign('title',$back_list[0]["name"]);
			$this->assign('video',$back_list[0]["video"]);
			$this->assign('scoreList',$back_list[0]["simple_score"]);
			$this->display("videoShow");
		}
	}
