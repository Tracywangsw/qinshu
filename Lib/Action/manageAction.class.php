<?php
	Class manageAction extends Action{
		Public function index(){
			$this->display("index");
		}
		Public function admin_index(){
			$this->display("admin-index");
		}
	}
?>