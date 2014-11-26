Undo = require "../main"

TestCommand = ->
  undo: ->
  execute: ->

describe "undo", ->
  it "should undo", ->
    undo = Undo()

    undo.execute TestCommand()

    undo.undo()

  it "should know if it can undo", ->
    undo = Undo()
    assert.equal undo.canUndo(), false

    undo.execute TestCommand()
    assert.equal undo.canUndo(), true

  it "should know if it can redo", ->
    undo = Undo()
    assert.equal undo.canRedo(), false

    undo.execute TestCommand()
    assert.equal undo.canRedo(), false

    undo.undo()
    assert.equal undo.canRedo(), true

  it "should be able to hydrate from data", ->
    data = [0..2].map TestCommand

    undo = Undo()
    undo.history data

    assert.equal undo.canUndo(), true
    assert.equal undo.canRedo(), false
