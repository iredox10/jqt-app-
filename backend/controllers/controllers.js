import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import Journal from "../models/journal.js"
import Quote from "../models/quote.js"
import Thought from "../models/thought.js"
import User from "../models/user.js"

const signJwt = (id, user) => {
  return jwt.sign({ id: id, user: user }, process.env.JWT_KEY)
}

export const home = async (req, res, next) => {
  res.json("welcomet to jqt")
}

export const register = async (req, res, next) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10)
    const user = await User.create({
      fullname: req.body.fullname,
      username: req.body.username,
      password: hashPassword,
    })
    const jwt = signJwt(user._id, user)
    res.status(201).json({ user, jwt })
    // res.json(hashPassword)
  } catch (err) {
    res.json(err)
  }
}

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })

    if (!user) {
      res.json("no user found")
    }

    if (!req.body.password) {
      res.json("please put password")
      }

    await bcrypt.compare(req.body.password, user.password, (err, password) => {
      if (password === false) {
        res.json('password did not match')
        return
      } else {
        res.json(user)
        return
      }
    })
  } catch (err) {
    res.json(err)
  }
}

export const add_journal = async (req, res, next) => {
  try {
    const journal = await Journal.create(req.body)
    const user = await User.findById(req.params.id)
    user.journals.push(journal)
    await user.save()
    res.status(201).json({ journal, user })
  } catch (err) {
    res.json(err)
  }
}

export const edit_journal = async (req, res, next) => {
  try {
    const journal = await Journal.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        journal: req.body.journal,
      },
      { new: true }
    )
    res.status(201).json({ journal, user })
  } catch (err) {
    res.json(err)
  }
}

export const delete_journal = async (req, res, next) => {
  try {
    const journal = await Journal.findByIdAndDelete(req.params.id)
    res.status(200).json(journal)
  } catch (err) {
    res.json(err)
  }
}

export const add_thought = async (req, res, next) => {
  try {
    const thought = await Thought.create(req.body)
    const user = await User.findById(req.params.id)
    user.thoughts.push(thought)
    await user.save()
    res.status(201).json({ thought, user })
  } catch (err) {
    res.json(err)
  }
}

export const edit_thought = async (req, res, next) => {
  try {
    const thought = await Thought.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        thought: req.body.thought,
      },
      { new: true }
    )
    res.status(201).json({ thought })
  } catch (err) {
    res.json(err)
  }
}

export const delete_thought = async (req, res, next) => {
  try {
    const thought = await Thought.findByIdAndDelete(req.params.id)
    res.status(200).json(thought)
  } catch (err) {
    res.json(err)
  }
}

export const add_quote = async (req, res, next) => {
  try {
    const quote = await Quote.create(req.body)
    const user = await User.findById(req.params.id)
    user.quotes.push(quote)
    await user.save()
    res.status(201).json({ quote, user })
  } catch (err) {
    res.json(err)
  }
}

export const edit_quote = async (req, res, next) => {
  try {
    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        quote: req.body.quote,
      },
      { new: true }
    )
    res.status(200).json({ quote })
  } catch (err) {
    res.json(err)
  }
}

export const delete_quote = async (req, res, next) => {
  try {
    const quote = await Quote.findByIdAndDelete(req.params.id)
    res.status(200).json(quote)
  } catch (err) {
    res.json(err)
  }
}

// export const
