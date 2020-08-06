<?php
 $linkedList = new SplDoublyLinkedList();
 $linkedList->push('xuexi');
 $linkedList->serialize();
 $linkedList->prev();
 var_dump($linkedList->serialize());
