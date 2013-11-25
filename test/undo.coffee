Undo = require "../main"

describe "undo", ->
  it "should undo", ->
    undo = Undo()
    
    undo.execute
      execute: ->
        console.log "execute"
      undo: ->
        console.log "undo"
    
    undo.undo()
