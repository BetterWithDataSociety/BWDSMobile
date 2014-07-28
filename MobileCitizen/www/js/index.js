/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        console.log('bindEvents....');
        $('#lastLoc').empty();
        $('#lastLoc').append('<tr><td>waiting-1...</td><td></td></tr>');
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        console.log('onDeviceReady');
        $('#lastLoc').empty();
        $('#lastLoc').append('<tr><td>waiting...</td><td></td></tr>');
        // app.receivedEvent('deviceready');
        window.plugin.backgroundMode.enable();
        // Watch location, calling onWatchCurrentPositionSuccess or onWatchCurrentPositionError accordingly
	navigator.geolocation.getCurrentPosition(app.onWatchCurrentPositionSuccess, app.onWatchCurrentPositionError);
	navigator.geolocation.watchPosition(app.onWatchCurrentPositionSuccess, app.onWatchCurrentPositionError);
        // Queue up an event to update position every 5000s
	setTimeout(app.updatePosition , 5000);
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');
        console.log('Received Event: ' + id);
    },
    onWatchCurrentPositionError: function() {
    },
    onWatchCurrentPositionSuccess: function(position) {
        console.log('Update app position');
	app.position = position;
	//<-- don't do anything intensive here , especially HTML updates, your display may hang with too much to do -->
    },
    updatePosition: function () {
	//<!-- update your HTML here , check for valid lat,lon (i.e. they should be different than -999) -->
	//<!-- call this function again -->
    
        try {
          app.ctr++
          console.log('Processing '+app.position+' '+app.ctr);
          // app.locationQueue.push(app.position);
          app.lastFive.push(app.position);
          if(app.lastFive.length > 5) {
            app.lastFive.splice(5, 1);
          } 
          $('#lastLoc').empty();
          for(var e in app.lastFive) {
            $('#lastLoc').append('<tr><td>'+e.timestamp+'['+app.ctr+']</td><td>'+e.coords+'</td></tr>');
          }
        }
        finally {
    	  setTimeout(app.updatePosition , 5000);
        }
    },
    position:-1,
    locationQueue:[],
    lastFive:[],
    ctr:0
};
