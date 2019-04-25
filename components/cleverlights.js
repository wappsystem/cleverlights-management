(function(){
    var modules={
        "panel-main-cleverlights":    			{url:"$A/components/panel/panel-main.html",router:1},
        "panel-child-cleverlights":    			{url:"$A/components/panel/panel-child.html"},
        
        "participant-data":   		{url:"$A/components/participant/participant-data.html",Table:"cleverlights-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child-cleverlights",
                                            questionnaire_setup:"online-questionnaire-setup-cleverlights",
                                            online_questionnaire:"online-questionnaire-app-cleverlights",
                                            participant_id:{field1:"Subject_ID",field2:"Subject_Initials"}
                                        },
        "participant-form":   		{url:"$A/components/participant/participant-form.html",Table:"cleverlights-participant"},

        "online-questionnaire-setup-cleverlights": 	{url:"$A/modulesnline-questionnaire/components/modulesnline-questionnaire-setup.html",Table:"cleverlights-participant"},
        "online-questionnaire-app-cleverlights":    {url:"$A/modulesnline-questionnaire/index.html"},

        "notes":  		  	  			{url:"$A/modules/notes.html"},

        "randomisation-table-data-spardac":		{url:"$A/modules/randomisation-table-data.html",Table:"randomisation-table-spardac",form_module:"randomisation-table-form-spardac"},
        "randomisation-table-form-spardac":		{url:"$A/modules/randomisation-table-form.html",Table:"randomisation-table-spardac"},

        "cl-bl-ethnicity-data":		            {url:"$A/modules/ethnicity-data.html",Table:"cl-bl-ethnicity",form_module:"cl-bl-ethnicity-form"},
        "cl-bl-ethnicity-form":		            {url:"$A/modules/ethnicity-form.html",Table:"cl-bl-ethnicity"},
        "cl-bl-lifestyle-data":		            {url:"$A/modules/lifestyle-data.html",Table:"cl-bl-lifestyle",form_module:"cl-bl-lifestyle-form"},
        "cl-bl-lifestyle-form":		            {url:"$A/modules/lifestyle-form.html",Table:"cl-bl-lifestyle"},
        "cl-bl-education-data":		            {url:"$A/modules/education-data.html",Table:"cl-bl-education",form_module:"cl-bl-education-form"},
        "cl-bl-education-form":		            {url:"$A/modules/education-form.html",Table:"cl-bl-education"},
        "cl-bl-medical-history-data":		    {url:"$A/modules/medical-history-data.html",Table:"cl-bl-medical-history",form_module:"cl-bl-medical-history-form"},
        "cl-bl-medical-history-form":		    {url:"$A/modules/medical-history-form.html",Table:"cl-bl-medical-history"},
        "cl-bl-medication-data":		        {url:"$A/modules/medication-data.html",Table:"cl-bl-medication",form_module:"cl-bl-medication-form"},
        "cl-bl-medication-form":		        {url:"$A/modules/medication-form.html",Table:"cl-bl-medication"},
        "cl-bl-ess-data":		                {url:"$A/modules/ess-data.html",Table:"cl-bl-ess",form_module:"cl-bl-ess-form"},
        "cl-bl-ess-form":		                {url:"$A/modules/ess-form.html",Table:"cl-bl-ess"},
        "cl-bl-dass-data":		                {url:"$A/modules/dass-data.html",Table:"cl-bl-dass",form_module:"cl-bl-dass-form"},
        "cl-bl-dass-form":		                {url:"$A/modules/dass-form.html",Table:"cl-bl-dass"},
        "cl-bl-sf36-data":		                {url:"$A/modules/sf36-data.html",Table:"cl-bl-sf36",form_module:"cl-bl-sf36-form"},
        "cl-bl-sf36-form":		                {url:"$A/modules/sf36-form.html",Table:"cl-bl-sf36"},
        "cl-bl-me-data":		                {url:"$A/modules/me-data.html",Table:"cl-bl-me",form_module:"cl-bl-me-form"},
        "cl-bl-me-form":		                {url:"$A/modules/me-form.html",Table:"cl-bl-me"},
        "cl-bl-hads-data":		                {url:"$A/modules/hads-data.html",Table:"cl-bl-hads",form_module:"cl-bl-hads-form"},
        "cl-bl-hads-form":		                {url:"$A/modules/hads-form.html",Table:"cl-bl-hads"},
        "cl-bl-smmse-data":		                {url:"$A/modules/smmse-data.html",Table:"cl-bl-smmse",form_module:"cl-bl-smmse-form"},
        "cl-bl-smmse-form":		                {url:"$A/modules/smmse-form.html",Table:"cl-bl-smmse"},

    }
    for(m in modules){$vm.module_list[m]=modules[m];}
})();
