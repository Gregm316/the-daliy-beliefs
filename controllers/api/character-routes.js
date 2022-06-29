//imports - router, and any model necessary
const router = require("express").Router();
const { Character, Post } = require("../../models");
const withAuth = require("../../utils/auth");

//Endpoint = "/api/characters"

//get / display ALL character (use findAll)
router.get("/", withAuth, async (req, res) => {
    try {
        const characterData = await Character.findAll({
            attributes: [character_name]
        });
        res.status(200).json(characterData); //displays all characterData
    } catch (err) {
        res.status(500).json(err);
    }
});

//get route - display a certain character by id# (use findbyPk) (we would essentially use Post.findAll where character_id=character.id)
router.get("/:id", withAuth, async (req, res) => {
    try {
        const characterData = await Post.findAll({ // find all items in the Post table but...
            where: {
                character_id: req.params.id // ...only return Posts where the id in the url matches the character_id column in the Post table
            }
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

//post route - only be used if we allow the end user to creat a new character page for a marvel character that we did not hard code


//export router
module.exports = router;