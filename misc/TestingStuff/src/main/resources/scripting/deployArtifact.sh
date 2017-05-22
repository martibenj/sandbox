#!/bin/bash
EXIT=0
IP=$1
SRC_DIR=$2
SRC_FILENAME=$3
DEST_DIR=$4
DEST_FILENAME=$5
SUB_FOLDER=target
USER=root
MDP=novadmin

usage()
{
	echo "################################################################################"
	echo "Usage : deploy.sh. Mandatory args :"
	echo "	IP : Remote IP"
	echo "	SRC_DIR : Dossier source en local"
	echo "	SRC_FILENAME : Fichier en local (dans target)"
	echo "	DEST_DIR : Dossier sur le remote"
	echo "	DEST_FILENAME : Nom du fichier sur le remote"
	echo "################################################################################"
}
if [ "x$IP" == "x" ] || [ "x$SRC_DIR" == "x" ] || [ "x$SRC_FILENAME" == "x" ] || [ "x$DEST_DIR" == "x" ] || [ "x$DEST_FILENAME" == "x" ]; then
	EXIT=1
	usage
fi

if [ $EXIT -eq 0 ]; then
	cd $SRC_DIR
	mvn clean install -DskipTests -o
	
	echo 'Deleting '$DEST_FILENAME' on remote'
	sshpass -p $MDP ssh $USER@$IP rm -rf $DEST_DIR/$DEST_FILENAME
	
	echo 'Changing filename to '$DEST_FILENAME
	mv $SRC_DIR/target/$SRC_FILENAME $DEST_FILENAME
	
	echo 'Sending '$DEST_FILENAME' to remote'
	sshpass -p $MDP scp $DEST_FILENAME $USER@$IP:$DEST_DIR/
	
	echo 'Cleaning'
	rm -f $DEST_FILENAME
fi

