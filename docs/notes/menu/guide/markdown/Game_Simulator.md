functions:


    l()
        
        paramater(s): ...
        return:
        use: shorthand print

    
    inputToggled()
    
        paramater(s):
        return:
        use: when the display for user input is toggled


    calculate()
    
        paramater(s):
        return:
        use: reloads page with user input

    
    encodeScenario(String)
        
        paramater(s):
            String
                numerical string of length equal to length of iteratingArrays
        return: UINT
        use: compresses readable form of a scenario into a number


    decodeScenario(UINT)
        
        paramater(s): UINT 
        return: numerical string
        use: decompresses a number into a readable form of a scenario


    scorePiece(UINT, Boolean)
        
        paramater(s):
            UINT, Boolean
                compressed scenario, true if alreadyHoldingAndPositioned - specifically for end of auton when robot may be positioned to score
        return:
        use: simulates a robot scoring a piece(s)
    
    
    addPlotData(UINT, String)
        
        paramater(s):
            UINT, String
                compressed scenario, an action the robot does such as 
        return: 
        use: pushes plot data to arrays
    

    updatedata(UINT)
        
        paramater(s):
            UINT
                compressed scenario
        return: 
        use: updates which scenario's data is being displayed in the right side of split screen
        
    
    autonScorePiece(UINT)

        paramater(s):
            UINT
                compressed scenario
        return: 
        use: simulates a robot scoring a piece(s) in auton
            
