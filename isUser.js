function isUser(arg: User | Bird): arg is User {
	return (arg as User).foo !== undefined;
}
