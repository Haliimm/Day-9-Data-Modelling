package connection

import (
	"github.com/jackc/pgx/v5"

	"context"
	"fmt"
	"os"
)

var Conn *pgx.Conn

func DatabaseConnection() {
	var err error

	databaseUrl := "postgres://postgres:12345@localhost:5432/personal_web"
	Conn, err = pgx.Connect(context.Background(), databaseUrl)

	if err != nil {
		fmt.Fprintf(os.Stderr, "Error connecting to Database: %v\n", err)
		os.Exit(1)
	}
	fmt.Println("Database Connected")
}