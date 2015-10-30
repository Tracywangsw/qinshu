<?php
	Class courseAction extends Action{
		Public function getAudio(){
			$course_id = $this->_post("id");
			if($course_id != null){
				$course = M("qinshu.course",null);
				$audio = $course->where("id = $course_id")->getField("audio");
				echo $audio;
			}
			else echo "no post request";
		}
	}