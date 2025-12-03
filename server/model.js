export class delicacy {
    constructor(name, description, ingredients, preparation, region) {
        this.name = name;
        this.description = description;
        this.ingredients = ingredients;
        this.preparation = preparation;
        this.region = region;
    }
}

export class vendor {
    constructor(name, specialty, contact, location) {
        this.name = name;
        this.specialty = specialty;
        this.contact = contact;
        this.location = location;
    }
}

export class message {
    constructor(name, email, content) {
        this.name = name;
        this.email = email;
        this.content = content;
    }
}