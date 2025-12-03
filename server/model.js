export class delicacy {
    constructor(name, description, ingredients, preparation, region, imageURL) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.preparation = preparation;
        this.region = region;
        this.imageURL = imageURL;
    }
}

export class vendor {
    constructor(name, specialty, contact, location, imageURL) {
        this.name = name;
        this.specialty = specialty;
        this.contact = contact;
        this.location = location;
        this.imageURL = imageURL;
    }
}

export class message {
    constructor(name, email, content) {
        this.name = name;
        this.email = email;
        this.content = content;
    }
}