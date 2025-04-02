enum USER_CONNECTION_STATUS {
	OFFLINE = "offline",
	ONLINE = "online",
}

interface User {
	username: string
	roomId: string
	status: USER_CONNECTION_STATUS
	cursorPosition: number
	typing: boolean
	currentFile: string | null
	socketId: string
}



interface File {
	id: string;
	name: string;
	content: string;
}

interface Directory {
	id: string;
	name: string;
	children: Directory[] | File[];
}

interface FileStructure {
	root: Directory;
	files: File[];
}

export { USER_CONNECTION_STATUS, User, File, Directory, FileStructure }
